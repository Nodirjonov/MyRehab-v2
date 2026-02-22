'use client';
import { useLang } from '../lib/LangContext';

export default function Problem() {
  const { t } = useLang();

  const problems = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
      titleKey: 'prob_1_title', descKey: 'prob_1_desc', color: 'var(--amber)', bg: 'var(--amber-bg)',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      titleKey: 'prob_2_title', descKey: 'prob_2_desc', color: 'var(--pink)', bg: 'var(--pink-bg)',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.994 1.994 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v4l.586-.586z"/></svg>,
      titleKey: 'prob_3_title', descKey: 'prob_3_desc', color: 'var(--purple)', bg: 'var(--purple-bg)',
    },
  ];

  const solutions = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
      titleKey: 'sol_1_title', descKey: 'sol_1_desc', color: 'var(--blue)', bg: 'var(--blue-bg)',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
      titleKey: 'sol_2_title', descKey: 'sol_2_desc', color: 'var(--green)', bg: 'var(--green-bg)',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
      titleKey: 'sol_3_title', descKey: 'sol_3_desc', color: 'var(--blue)', bg: 'var(--blue-bg)',
    },
  ];

  const competitors = [
    { name: 'Physitrack', key: 'comp_physitrack', highlight: false },
    { name: 'MedBridge', key: 'comp_medbridge', highlight: false },
    { name: (lang: 'en' | 'ru' | 'uz') =>
  lang === 'en'
    ? 'Paper prescriptions'
    : lang === 'uz'
    ? "Qog'oz retseptlar"
    : 'Бумажные рецепты',},
    { name: 'MyRehab ✓', key: 'comp_myrehab', highlight: true },
  ];

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">

        <div className="reveal mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-[var(--amber-bg)] bg-[var(--amber-bg)] text-[var(--amber)] text-[11px] font-bold tracking-widest uppercase rounded-sm">
            {t('prob_label')}
          </div>
          <h2 className="font-serif text-[var(--text)] font-normal leading-[1.1]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            {t('prob_h2_1')}<br />
            <span className="text-[var(--amber)]">{t('prob_h2_2')}</span>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {problems.map(({ icon, titleKey, descKey, color, bg }, i) => {
            const radii = ['4px 18px 18px 18px', '18px 18px 18px 4px', '18px 4px 18px 18px'];
            return (
              <div key={i} className="p-6 border border-[var(--border-em)] bg-[var(--bg-card)] group hover:-translate-y-1 transition-transform duration-250"
                style={{ borderRadius: radii[i] }}>
                <div className="w-11 h-11 flex items-center justify-center mb-4 rounded-xl" style={{ background: bg, color }}>{icon}</div>
                <div className="text-[14px] font-bold text-[var(--text)] mb-2">{t(titleKey)}</div>
                <p className="text-[13px] text-[var(--text-2)] leading-relaxed m-0">{t(descKey)}</p>
                <div className="mt-4 h-0.5 w-8 group-hover:w-16 transition-all duration-300" style={{ background: color }} />
              </div>
            );
          })}
        </div>

        <div className="reveal flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[var(--border-em)]" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--green-bg)] bg-[var(--green-bg)] text-[var(--green)] text-[11px] font-bold tracking-widest uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            {t('sol_label')}
          </div>
          <div className="flex-1 h-px bg-[var(--border-em)]" />
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutions.map(({ icon, titleKey, descKey, color, bg }, i) => {
            const radii = ['18px 18px 4px 18px', '18px 4px 18px 18px', '4px 18px 18px 18px'];
            return (
              <div key={i} className="p-6 border bg-[var(--bg-card)] group hover:-translate-y-1 transition-transform duration-250"
                style={{ borderRadius: radii[i], borderColor: `color-mix(in srgb, ${color} 30%, transparent)` }}>
                <div className="w-11 h-11 flex items-center justify-center mb-4 rounded-xl" style={{ background: bg, color }}>{icon}</div>
                <div className="text-[14px] font-bold text-[var(--text)] mb-2">{t(titleKey)}</div>
                <p className="text-[13px] text-[var(--text-2)] leading-relaxed m-0">{t(descKey)}</p>
                <div className="mt-4 h-0.5 w-8 group-hover:w-16 transition-all duration-300" style={{ background: color }} />
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 border border-[var(--border-em)] bg-[var(--bg-card)] overflow-hidden" style={{ borderRadius: '12px 4px 12px 12px' }}>
          <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-2)]">
            <div className="text-[12px] font-bold text-[var(--text-muted)] tracking-widest uppercase">{t('comp_label')}</div>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {[
              { name: 'Physitrack', key: 'comp_physitrack', highlight: false },
              { name: 'MedBridge', key: 'comp_medbridge', highlight: false },
              { name: t('prob_label') === 'The problem' ? 'Paper prescriptions' : t('prob_label') === 'Muammo' ? "Qog'oz retseptlar" : 'Бумажные рецепты', key: 'comp_paper', highlight: false },
              { name: 'MyRehab ✓', key: 'comp_myrehab', highlight: true },
            ].map(({ name, key, highlight }) => (
              <div key={name} className={`flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-4 ${highlight ? 'bg-[var(--green-bg)]' : ''}`}>
                <div className={`text-[13px] font-bold w-36 shrink-0 ${highlight ? 'text-[var(--green)]' : 'text-[var(--text-muted)]'}`}>{name}</div>
                <div className={`text-[13px] leading-relaxed ${highlight ? 'text-[var(--green)]' : 'text-[var(--text-2)]'}`}>{t(key)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
