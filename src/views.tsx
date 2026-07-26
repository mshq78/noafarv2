import React from 'react';
import { Card } from './components/Card';
import { SectionHero } from './components/SectionHero';
import { ACADEMY_CATEGORIES, TOOLBOX_CATEGORIES, TOOLBOX_FORMATS, JOURNEY_CATEGORIES } from './data';

export const HomeView = ({ navigate }: any) => {
  const tiles = [
    { key: 'academy', title: 'آکادمی نوآوری', desc: 'دوره‌های آموزشی برای یادگیری مفاهیم و مهارت‌های نوآوری اجتماعی', tileClass: 'tile-academy tile-1', icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/> },
    { key: 'toolbox', title: 'جعبه ابزار نوآوری', desc: 'ابزارها، تکنیک‌ها و روش‌های عملی برای طراحی و اجرای پروژه‌ها', tileClass: 'tile-toolbox tile-2', icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/> },
    { key: 'library', title: 'کتابخانه نوآوری', desc: 'کتاب‌ها، جزوات و منابع خواندنی', tileClass: 'tile-library tile-3', icon: <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/> },
    { key: 'journey', title: 'سفر نوآوری', desc: 'تجربه‌های نوآورانه فعالان اجتماعی', tileClass: 'tile-journey tile-4', icon: <><path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></> },
    { key: 'events', title: 'دورهمی نوآوری', desc: 'کارگاه‌ها، وبینارها و رویدادهای حضوری و آنلاین', tileClass: 'tile-events tile-5', icon: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></> },
    { key: 'ideas', title: 'بانک ایده‌ها', desc: 'ایده‌های نوآورانه برای حل مسائل اجتماعی', tileClass: 'tile-ideas tile-6', icon: <><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></> }
  ];

  return (
    <div className="fade-in">
      <section className="home-hero">
        <div className="logo-large">ن</div>
        <h1>نوآفر؛ پلتفرم نوآوری اجتماعی</h1>
        <p>جایی برای یادگیری، خلق و به‌اشتراک‌گذاری ایده‌هایی که جامعه را تغییر می‌دهند. از آموزش و ابزار تا تجربه‌های واقعی و رویدادهای الهام‌بخش.</p>
        <div className="home-search">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" placeholder="جستجو در دوره‌ها، ابزارها، ایده‌ها و تجربه‌ها..." />
        </div>
      </section>

      <section className="puzzle-section">
        <div className="puzzle-grid">
          {tiles.map(t => (
            <div key={t.key} onClick={() => navigate(t.key)} className={`puzzle-tile ${t.tileClass}`}>
              <div className="tile-content">
                <div className="tile-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
              <svg className="tile-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </div>
          ))}
        </div>
      </section>
      
      <section className="cta-section">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>ایده‌ای در سر داری؟</h2>
          <p>ایده‌ات را با جامعه نوآفر به اشتراک بگذار و از بازخوردها، راهنمایی‌ها و همکاری دیگران بهره‌مند شو.</p>
          <button className="cta-btn">ثبت ایده جدید</button>
        </div>
      </section>
    </div>
  );
};

export const GenericView = ({ type, data, filter, setFilter, formatFilter, setFormatFilter, navigate, toggleLike, toggleBookmark, likes, bookmarks, watched }: any) => {
  const items = data || [];
  
  let filtered = items;
  if (filter !== 'همه') {
    filtered = filtered.filter((i: any) => i.category === filter || (type === 'events' && (i.type === filter || (filter === 'گزارش' && i.status === 'برگزار شده'))));
  }
  
  if (type === 'toolbox' && formatFilter !== 'همه') {
    filtered = filtered.filter((i: any) => {
      if (formatFilter === 'دیجیتال') return i.digital;
      if (formatFilter === 'فایل') return i.printable || !i.digital;
      return i.format === formatFilter;
    });
  }

  let categories = ['همه'];
  if (type === 'academy') categories = ACADEMY_CATEGORIES;
  else if (type === 'toolbox') categories = TOOLBOX_CATEGORIES;
  else if (type === 'events') categories = ['همه', 'کارگاه حضوری', 'وبینار آنلاین', 'گزارش'];
  else if (type === 'journey' || type === 'ideas') categories = JOURNEY_CATEGORIES;
  else if (type === 'library') {
    items.forEach((i: any) => {
      if (!categories.includes(i.category)) categories.push(i.category);
    });
  }

  return (
    <div className="fade-in">
      <SectionHero sectionKey={type} />
      
      {type === 'toolbox' ? (
        <>
          <div className="filter-group">
            <span className="filter-label">دسته‌بندی موضوعی:</span>
            {categories.map((c: string) => (
              <button key={c} onClick={() => setFilter(c)} className={`filter-btn ${filter === c ? 'active' : ''}`}>{c}</button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">قالب:</span>
            {TOOLBOX_FORMATS.map((c: string) => (
              <button key={c} onClick={() => setFormatFilter(c)} className={`filter-btn ${formatFilter === c ? 'active' : ''}`}>{c}</button>
            ))}
          </div>
          <div className="masonry">
            {filtered.map((item: any) => (
              <Card key={item._id || item.id} item={item} type={type} navigate={navigate} toggleLike={toggleLike} toggleBookmark={toggleBookmark} isLiked={likes.includes(`${type}:${item._id || item.id}`)} isBookmarked={bookmarks.includes(`${type}:${item._id || item.id}`)} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="filters">
            {categories.map((c: string) => (
              <button key={c} onClick={() => setFilter(c)} className={`filter-btn ${filter === c ? 'active' : ''}`}>{c}</button>
            ))}
          </div>
          <div className="cards-grid">
            {filtered.map((item: any) => (
              <Card key={item._id || item.id} item={item} type={type} navigate={navigate} toggleLike={toggleLike} toggleBookmark={toggleBookmark} isLiked={likes.includes(`${type}:${item._id || item.id}`)} isBookmarked={bookmarks.includes(`${type}:${item._id || item.id}`)} watched={watched[`${item._id || item.id}`]} />
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '48px' }}>موردی یافت نشد</p>}
      
      {type === 'journey' && (
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <button className="btn-outline" style={{ padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>ثبت تجربه جدید</button>
        </div>
      )}
      {type === 'ideas' && (
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <button className="btn-primary" style={{ padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>ثبت ایده جدید</button>
        </div>
      )}
    </div>
  );
};
