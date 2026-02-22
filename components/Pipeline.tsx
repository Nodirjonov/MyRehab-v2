'use client';
import { useLang } from '../lib/LangContext';

export default function Pipeline() {
  const { t } = useLang();

  const steps = [
    {
      n: '01', color: 'var(--blue)', bg: 'var(--blue-bg)',
      labelKey: 'pipe_step1_label', descKey: 'pipe_step1_desc', badge: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      n: '02', color: 'var(--amber)', bg: 'var(--amber-bg)',
      labelKey: 'pipe_step2_label', descKey: 'pipe_step2_desc', badge: 'badge_block',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      n: '03', color: 'var(--blue)', bg: 'var(--blue-bg)',
      labelKey: 'pipe_step3_label', descKey: 'pipe_step3_desc', badge: 'badge_composer',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    },
    {
      n: '04', color: 'var(--purple)', bg: 'var(--purple-bg)',
      labelKey: 'pipe_step4_label', descKey: 'pipe_step4_desc', badge: 'badge_11',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    },
    {
      n: '05', color: 'var(--pink)', bg: 'var(--pink-bg)',
      labelKey: 'pipe_step5_label', descKey: 'pipe_step5_desc', badge: 'badge_7',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
      n: '06', color: 'var(--green)', bg: 'var(--green-bg)',
      labelKey: 'pipe_step6_label', descKey: 'pipe_step6_desc', badge: 'badge_mandatory',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
    },
    {
      n: '07', color: 'var(--green)', bg: 'var(--green-bg)',
      labelKey: 'pipe_step7_label', descKey: 'pipe_step7_desc', badge: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    },
  ];

  return (
    <section id="pipeline" className="py-20 md:py-28 px-5 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">

        <div className="reveal mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-[var(--blue-bg)] bg-[var(--blue-bg)] text-[var(--blue)] text-[11px] font-bold tracking-widest uppercase rounded-sm">
            {t('pipe_label')}
          </div>
          <h2 className="font-serif text-[var(--text)] font-normal leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            {t('pipe_h2_1')}<br />
            <span className="text-[var(--blue)]">{t('pipe_h2_2')}</span>
          </h2>
          <p className="text-[var(--text-2)] text-[15px] leading-relaxed max-w-xl">{t('pipe_sub')}</p>
        </div>

        <div className="reveal space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-5 border border-[var(--border)] bg-[var(--bg-card)] group hover:border-[var(--border-em)] transition-all duration-200"
              style={{ borderRadius: i % 2 === 0 ? '4px 16px 16px 16px' : '16px 4px 16px 16px' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <span className="text-[10px] font-bold text-[var(--text-muted)]">{s.n}</span>
                  <span className="text-[14px] font-semibold text-[var(--text)]">{t(s.labelKey)}</span>
                  {s.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-sm"
                      style={{ color: s.color, background: s.bg }}>
                      {t(s.badge)}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[var(--text-2)] leading-relaxed m-0">{t(s.descKey)}</p>
              </div>
              <div className="w-1 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                style={{ background: s.color }} />
            </div>
          ))}
        </div>

        <div className="reveal mt-6 p-5 border border-[var(--green-bg)] bg-[var(--green-bg)]" style={{ borderRadius: '16px 4px 16px 16px' }}>
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-[var(--green)] mb-1">{t('pipe_cds_title')}</div>
              <p className="text-[13px] text-[var(--text-2)] leading-relaxed m-0">{t('pipe_cds_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
