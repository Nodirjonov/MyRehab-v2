'use client';
import { useState } from 'react';
import { useLang } from '../lib/LangContext';

const RADII = [
  '4px 16px 16px 16px',
  '16px 16px 16px 4px',
  '16px 4px 16px 16px',
  '16px 16px 4px 16px',
  '4px 16px 16px 4px',
];

export default function Specialties() {
  const { t } = useLang();
  const [active, setActive] = useState('all');

  const groups = [
    { key: 'all', label: () => t('spec_all') },
    { key: 'neuro', label: () => t('spec_neurology') },
    { key: 'cardio', label: () => t('spec_cardiology') },
    { key: 'msk', label: () => t('spec_msk') },
    { key: 'func', label: () => t('spec_functional') },
  ];

  const COLORS = ['var(--blue)', 'var(--purple)', 'var(--green)', 'var(--amber)', 'var(--pink)'];

  const specialties = [
    { nameKey: 'sp_stroke', enKey: 'sp_stroke_en', group: 'neuro', color: 'var(--purple)', bg: 'var(--purple-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><circle cx="18" cy="6" r="2"/></svg> },
    { nameKey: 'sp_tbi', enKey: 'sp_tbi_en', group: 'neuro', color: 'var(--purple)', bg: 'var(--purple-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.79-4.13A2.5 2.5 0 0 1 5.5 10a2.5 2.5 0 0 1 1.5-4.65A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.79-4.13A2.5 2.5 0 0 0 18.5 10a2.5 2.5 0 0 0-1.5-4.65A2.5 2.5 0 0 0 14.5 2z"/></svg> },
    { nameKey: 'sp_ms_park', enKey: 'sp_ms_park_en', group: 'neuro', color: 'var(--purple)', bg: 'var(--purple-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
    { nameKey: 'sp_spinal', enKey: 'sp_spinal_en', group: 'neuro', color: 'var(--purple)', bg: 'var(--purple-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
    { nameKey: 'sp_cardiac', enKey: 'sp_cardiac_en', group: 'cardio', color: 'var(--pink)', bg: 'var(--pink-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.77 7.65 7.65 7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.65z"/></svg> },
    { nameKey: 'sp_pulm', enKey: 'sp_pulm_en', group: 'cardio', color: 'var(--pink)', bg: 'var(--pink-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v7"/><path d="M6.5 9c-1.5 0-4 1.5-4 5s2 6 4 6 5-2 5-5V9"/><path d="M17.5 9c1.5 0 4 1.5 4 5s-2 6-4 6-5-2-5-5V9"/></svg> },
    { nameKey: 'sp_onco', enKey: 'sp_onco_en', group: 'cardio', color: 'var(--pink)', bg: 'var(--pink-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
    { nameKey: 'sp_burn', enKey: 'sp_burn_en', group: 'cardio', color: 'var(--pink)', bg: 'var(--pink-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> },
    { nameKey: 'sp_ortho', enKey: 'sp_ortho_en', group: 'msk', color: 'var(--blue)', bg: 'var(--blue-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m9 12 2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7z"/><path d="M22 19H2"/></svg> },
    { nameKey: 'sp_sports', enKey: 'sp_sports_en', group: 'msk', color: 'var(--blue)', bg: 'var(--blue-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93c4.23 4.23 10 4.5 14.14.36"/><path d="M4.93 19.07c4.23-4.23 4.5-10 .36-14.14"/></svg> },
    { nameKey: 'sp_oda', enKey: 'sp_oda_en', group: 'msk', color: 'var(--blue)', bg: 'var(--blue-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6.5 6.5c1.5 1.26 2.5 3.09 2.5 5.5 0 1-.5 3-2.5 4.5C4.5 18 3 18 3 18c0-3 1.5-5 3.5-5.5V6.5z"/><path d="M17.5 6.5c-1.5 1.26-2.5 3.09-2.5 5.5 0 1 .5 3 2.5 4.5C19.5 18 21 18 21 18c0-3-1.5-5-3.5-5.5V6.5z"/><path d="M12 2v20"/></svg> },
    { nameKey: 'sp_post', enKey: 'sp_post_en', group: 'msk', color: 'var(--blue)', bg: 'var(--blue-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
    { nameKey: 'sp_geri', enKey: 'sp_geri_en', group: 'func', color: 'var(--green)', bg: 'var(--green-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/><path d="M12 16v5"/><path d="m9 18 3-2 3 2"/></svg> },
    { nameKey: 'sp_ped', enKey: 'sp_ped_en', group: 'func', color: 'var(--green)', bg: 'var(--green-bg)',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5.5 4.5 1.4"/></svg> },
  ];

  const filtered = active === 'all' ? specialties : specialties.filter(s => s.group === active);

  return (
    <section id="specialties" className="py-20 md:py-28 px-5 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">

        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-[var(--blue-bg)] bg-[var(--blue-bg)] text-[var(--blue)] text-[11px] font-bold tracking-widest uppercase rounded-sm">
              {t('spec_label')}
            </div>
            <h2 className="font-serif text-[var(--text)] font-normal leading-[1.1]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
              {t('spec_h2_1')}<br />
              <span className="text-[var(--blue)]">{t('spec_h2_2')}</span>
            </h2>
          </div>
          <p className="text-[var(--text-2)] text-[14px] leading-relaxed max-w-xs">{t('spec_sub')}</p>
        </div>

        <div className="reveal flex flex-wrap gap-2 mb-8">
          {groups.map(({ key, label }, i) => (
            <button key={key} onClick={() => setActive(key)}
              className={`px-4 py-2 text-[12px] font-semibold border cursor-pointer transition-all duration-150
                ${active === key ? 'text-white border-transparent' : 'bg-transparent border-[var(--border-em)] text-[var(--text-muted)] hover:text-[var(--text)]'}`}
              style={{
                borderRadius: i % 2 === 0 ? '4px 10px 10px 10px' : '10px 4px 10px 10px',
                background: active === key ? (i === 0 ? 'var(--blue)' : COLORS[i]) : undefined,
              }}>
              {label()}
            </button>
          ))}
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map(({ nameKey, enKey, color, bg, icon }, i) => (
            <div key={nameKey} className="group p-4 border border-[var(--border)] bg-[var(--bg-card)] hover:-translate-y-1 hover:border-[var(--border-em)] transition-all duration-200 cursor-default"
              style={{ borderRadius: RADII[i % RADII.length] }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: bg, color }}>{icon}</div>
              <div className="text-[13px] font-semibold text-[var(--text)] mb-0.5">{t(nameKey)}</div>
              <div className="text-[11px] text-[var(--text-muted)]">{t(enKey)}</div>
              <div className="mt-3 h-0.5 w-6 group-hover:w-full transition-all duration-300" style={{ background: color }} />
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center gap-6">
          <p className="text-[12px] text-[var(--text-muted)]">{t('spec_refs')}</p>
          <a href="#" className="text-[13px] text-[var(--blue)] font-medium no-underline hover:opacity-70 shrink-0">{t('spec_registry')}</a>
        </div>
      </div>
    </section>
  );
}
