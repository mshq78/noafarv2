import React from 'react';

export const Card = ({ item, type, navigate, toggleLike, toggleBookmark, isLiked, isBookmarked, watched }: any) => {
  const img = item.coverImage || item.image;
  const id = item._id || item.id;

  let badgeClass = 'card-badge';
  let badgeText = '';

  if (watched) {
    badgeClass += ' pink';
    badgeText = 'دیده‌شده';
  } else if (item.status) {
    badgeText = item.status;
  } else if (item.type) {
    badgeClass += item.type === 'کارگاه حضوری' ? ' pink' : item.type === 'وبینار آنلاین' ? ' blue' : ' yellow';
    badgeText = item.type;
  } else if (item.format) {
    badgeText = item.format;
  }

  return (
    <div className="card" onClick={() => navigate(type, id)}>
      <div className="card-image">
        <img src={img} alt={item.title} />
        {badgeText && <div className={badgeClass}>{badgeText}</div>}
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
          {item.category && <span className="chip">{item.category}</span>}
          {item.level && <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.level}</span>}
          {item.difficulty && (
            <span className={`chip ${item.difficulty === 'متوسط' ? 'yellow' : item.difficulty === 'پیشرفته' ? 'blue' : ''}`}>
              {item.difficulty}
            </span>
          )}
        </div>
        <h3>{item.title}</h3>
        <p className="line-clamp-2">{item.description || item.desc || item.summary}</p>
        <div className="card-meta">
          <div className="card-meta-left">
            {item.duration && <span>{item.duration}</span>}
            {item.readTime && <span>{item.readTime}</span>}
            {item.date && <span>{item.date}</span>}
            {item.views !== undefined && <span>{item.views} بازدید</span>}
            {item.likes !== undefined && <span>{item.likes} لایک</span>}
          </div>
          <div className="card-actions" onClick={(e) => e.stopPropagation()}>
            <button className={isLiked ? 'liked' : ''} onClick={() => toggleLike(type, id)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
            <button className={isBookmarked ? 'bookmarked' : ''} onClick={() => toggleBookmark(type, id)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
