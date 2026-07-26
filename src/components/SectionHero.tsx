import React from 'react';
import { SECTIONS } from '../data';

export const SectionHero = ({ sectionKey }: { sectionKey: string }) => {
  const s = SECTIONS[sectionKey];
  if (!s) return null;
  return (
    <div className="section-hero fade-in" style={{ '--section-color': s.color, '--section-color-light': s.colorLight } as any}>
      <div className="hero-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {sectionKey === 'academy' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></>}
          {sectionKey === 'toolbox' && <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>}
          {sectionKey === 'events' && <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></>}
          {sectionKey === 'journey' && <><path d="M12 22s-8-4.5-8-11.8a8 8 0 0 1 16 0c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></>}
          {sectionKey === 'library' && <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></>}
          {sectionKey === 'ideas' && <><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></>}
        </svg>
      </div>
      <h1>{s.subtitle}</h1>
      <p>{s.desc}</p>
    </div>
  );
};
