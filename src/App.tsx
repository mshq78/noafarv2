import React, { useState, useEffect } from 'react';
import { api } from './api';
import { loginWithGoogle, logoutGoogle } from './lib/firebase';
import { DATA } from './data';
import { GenericView, HomeView } from './views';

export default function App() {
  const [page, setPage] = useState('home');
  const [detail, setDetail] = useState<string | null>(null);
  const [filter, setFilter] = useState('همه');
  const [formatFilter, setFormatFilter] = useState('همه');
  
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [likes, setLikes] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [watched, setWatched] = useState<Record<string, boolean>>({});
  const [points, setPoints] = useState(0);

  const [dbData, setDbData] = useState<any>({
    academy: DATA.academy,
    toolbox: DATA.toolbox,
    ideas: DATA.ideas,
    events: DATA.events,
    journey: DATA.journey,
    library: DATA.library
  });

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [films, tools, ideas, events, experiences, books] = await Promise.all([
          api.getFilms(),
          api.getTools(),
          api.getIdeas(),
          api.getEvents(),
          api.getExperiences(),
          api.getBooks()
        ]);
        setDbData({
          academy: films.length ? films : DATA.academy,
          toolbox: tools.length ? tools : DATA.toolbox,
          ideas: ideas.length ? ideas : DATA.ideas,
          events: events.length ? events : DATA.events,
          journey: experiences.length ? experiences : DATA.journey,
          library: books.length ? books : DATA.library
        });
      } catch (err) {
        console.error("Failed to load DB data", err);
      }
    };
    loadAll();
  }, []);

  const navigate = (p: string, d?: string) => {
    setPage(p);
    setDetail(d || null);
    setFilter('همه');
    setFormatFilter('همه');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuth = async () => {
    try {
      setIsLoggingIn(true);
      const { token: idToken } = await loginWithGoogle();
      const res = await api.login(idToken);
      if (res.token) {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        setUser(res);
      }
    } catch (err) {
      console.error(err);
      alert("خطایی رخ داد");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    logoutGoogle();
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const toggleLike = (type: string, id: string) => {
    const key = `${type}:${id}`;
    if (likes.includes(key)) {
      setLikes(likes.filter(k => k !== key));
    } else {
      setLikes([...likes, key]);
      setPoints(p => p + 2);
    }
  };

  const toggleBookmark = (type: string, id: string) => {
    const key = `${type}:${id}`;
    if (bookmarks.includes(key)) {
      setBookmarks(bookmarks.filter(k => k !== key));
    } else {
      setBookmarks([...bookmarks, key]);
      setPoints(p => p + 3);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="logo">
              <div className="logo-icon">ن</div>
              <span>نوآفر</span>
            </a>
            <nav className="nav" id="desktopNav" style={{ display: 'flex' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className={page === 'home' ? 'active' : ''}>خانه</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('academy'); }} className={page === 'academy' ? 'active' : ''}>آکادمی</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('toolbox'); }} className={page === 'toolbox' ? 'active' : ''}>جعبه ابزار</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('ideas'); }} className={page === 'ideas' ? 'active' : ''}>ایده‌ها</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('events'); }} className={page === 'events' ? 'active' : ''}>رویدادها</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('journey'); }} className={page === 'journey' ? 'active' : ''}>سفر نوآوری</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('library'); }} className={page === 'library' ? 'active' : ''}>کتابخانه</a>
            </nav>
          </div>
          <div className="header-actions">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px' }}>{user.name}</span>
                <span className="chip yellow">{points} امتیاز</span>
                <button onClick={handleLogout} className="btn-outline" style={{ padding: '4px 8px', fontSize: '12px' }}>خروج</button>
              </div>
            ) : (
              <button onClick={handleAuth} disabled={isLoggingIn} className="btn-primary">
                {isLoggingIn ? 'درحال ورود...' : 'ورود با گوگل'}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="main" id="app">
        {detail ? (
          <div style={{ textAlign: 'center', padding: '48px' }}>
             <h2>نمایش جزئیات {detail} (به زودی)</h2>
             <button className="btn-outline mt-4" onClick={() => setDetail(null)}>بازگشت</button>
          </div>
        ) : page === 'home' ? (
          <HomeView navigate={navigate} />
        ) : (
          <GenericView 
            type={page} 
            data={dbData[page]} 
            filter={filter} setFilter={setFilter} 
            formatFilter={formatFilter} setFormatFilter={setFormatFilter} 
            navigate={navigate} 
            toggleLike={toggleLike} toggleBookmark={toggleBookmark} 
            likes={likes} bookmarks={bookmarks} watched={watched}
          />
        )}
      </main>
      
      <footer className="footer">
        <div className="footer-bottom">
          © ۱۴۰۵ نوآفر - تمامی حقوق محفوظ است
        </div>
      </footer>
    </>
  );
}
