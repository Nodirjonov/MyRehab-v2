'use client';
import { useLang } from '../lib/LangContext';

export default function CTA() {
  const { t } = useLang();

  const stats = [
    { nKey: 'cta_stat1_n', labelKey: 'cta_stat1_label', r: '4px 12px 12px 12px' },
    { nKey: 'cta_stat2_n', labelKey: 'cta_stat2_label', r: '12px 4px 12px 12px' },
    { nKey: 'cta_stat3_n', labelKey: 'cta_stat3_label', r: '12px 12px 4px 12px' },
  ];

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative overflow-hidden border border-[var(--border-em)] bg-[var(--bg-card)] p-8 md:p-14"
          style={{ borderRadius: '4px 24px 24px 24px' }}>

          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, var(--blue-bg) 0%, transparent 70%)' }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-[var(--green-bg)] bg-[var(--green-bg)] text-[var(--green)] text-[11px] font-bold tracking-widest uppercase rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)] blink" />
                {t('cta_badge')}
              </div>

              <h2 className="font-serif text-[var(--text)] font-normal leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                {t('cta_h2_1')}<br />
                <span className="text-[var(--blue)]">{t('cta_h2_2')}</span>
              </h2>

              <p className="text-[var(--text-2)] text-[15px] leading-relaxed mb-8 max-w-lg">{t('cta_sub')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map(({ nKey, labelKey, r }) => (
                  <div key={nKey} className="p-4 border border-[var(--border)] bg-[var(--bg-2)]" style={{ borderRadius: r }}>
                    <div className="font-serif text-[var(--blue)] mb-1" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{t(nKey)}</div>
                    <div className="text-[12px] text-[var(--text-muted)] leading-snug">{t(labelKey)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[190px]">
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--blue)] text-white text-[14px] font-semibold no-underline hover:opacity-90 shadow-[0_4px_18px_rgba(26,95,212,0.3)]"
                style={{ borderRadius: '12px 4px 12px 12px' }}>
                {t('cta_btn_clinic')}
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-4 border border-[var(--border-em)] text-[var(--text-2)] text-[14px] font-medium no-underline hover:text-[var(--text)]"
                style={{ borderRadius: '4px 12px 12px 4px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                {t('cta_btn_tg')}
              </a>
              <div className="text-[11px] text-[var(--text-muted)] text-center">{t('cta_note')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
