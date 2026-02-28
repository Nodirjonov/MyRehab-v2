'use client';
import { useLang } from '../lib/LangContext';

export default function Hero() {
  const { t } = useLang();

  const bubbles = [
    { size: 380, top: '8%',  left: '-6%',  cls: 'bubble-a bubble-wave',   opacity: 0.55 },
    { size: 260, top: '50%', left: '10%',  cls: 'bubble-b bubble-wave-2', opacity: 0.40 },
    { size: 180, top: '20%', left: '30%',  cls: 'bubble-c bubble-wave-3', opacity: 0.30 },
    { size: 440, top: '-5%', right: '-8%', cls: 'bubble-b bubble-wave',   opacity: 0.45 },
    { size: 220, top: '55%', right: '12%', cls: 'bubble-a bubble-wave-2', opacity: 0.35 },
    { size: 140, top: '38%', right: '28%', cls: 'bubble-c bubble-wave-3', opacity: 0.25 },
    { size: 90,  top: '72%', left: '22%',  cls: 'bubble-b bubble-wave',   opacity: 0.45 },
    { size: 110, top: '15%', right: '42%', cls: 'bubble-a bubble-wave-2', opacity: 0.20 },
    { size: 60,  top: '62%', left: '52%',  cls: 'bubble-c bubble-wave-3', opacity: 0.35 },
  ];

  return (
    <section className="relative min-h-screen grid-dots flex flex-col justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b, i) => (
          <div key={i} className={`bubble ${b.cls}`}
            style={{
              width: b.size, height: b.size, top: b.top,
              left: 'left' in b ? b.left : undefined,
              right: 'right' in b ? b.right : undefined,
              opacity: b.opacity,
            }} />
        ))}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--bg) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-10 py-16 md:py-24">

    

        <h1 className="anim-2 font-serif font-normal leading-[1.05] mb-7 text-[var(--text)]"
          style={{ fontSize: 'clamp(42px, 7.5vw, 90px)' }}>
          {t('hero_h1_1')}<br />
          <em className="not-italic text-[var(--blue)]">{t('hero_h1_2')}</em><br />
          <span className="text-[var(--text-muted)]" style={{ fontSize: 'clamp(20px, 4vw, 50px)' }}>
            {t('hero_h1_3')}
          </span>
        </h1>

        <p className="anim-3 text-[var(--text-2)] text-[12px] md:text-[18px] leading-[1.7] max-w-[560px] mb-10">
          {t('hero_sub')}
        </p>

        <div className="anim-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mb-10">
          {/* Doctor card */}
          <div className="p-5 border border-[var(--border-em)] bg-[var(--bg-card)]"
            style={{ borderRadius: '4px 20px 20px 20px' }}>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--blue-bg)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[var(--text)]">{t('hero_doc_title')}</div>
                <div className="text-[11px] text-[var(--text-muted)]">{t('hero_doc_sub')}</div>
              </div>
            </div>
            <ul className="space-y-2">
              {(['hero_doc_f1','hero_doc_f2','hero_doc_f3','hero_doc_f4','hero_doc_f5'] as const).map((key) => (
                <li key={key} className="flex items-center gap-2 text-[12.5px] text-[var(--text-2)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Patient card */}
          <div className="p-5 border border-[var(--border-em)] bg-[var(--bg-card)]"
            style={{ borderRadius: '20px 20px 4px 20px' }}>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--green-bg)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[var(--text)]">{t('hero_pat_title')}</div>
                <div className="text-[11px] text-[var(--text-muted)]">{t('hero_pat_sub')}</div>
              </div>
            </div>
            <ul className="space-y-2">
              {(['hero_pat_f1','hero_pat_f2','hero_pat_f3','hero_pat_f4','hero_pat_f5'] as const).map((key) => (
                <li key={key} className="flex items-center gap-2 text-[12.5px] text-[var(--text-2)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="anim-5 flex flex-col sm:flex-row gap-3">
          <a href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--blue)] text-white text-[14px] font-semibold no-underline hover:opacity-90 shadow-[0_4px_18px_rgba(26,95,212,0.35)]"
            style={{ borderRadius: '12px 4px 12px 12px' }}>
            {t('hero_cta_clinic')}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#pipeline"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border-em)] text-[var(--text-2)] text-[14px] font-medium no-underline hover:border-[var(--blue)] hover:text-[var(--blue)]"
            style={{ borderRadius: '4px 12px 12px 12px' }}>
            {t('hero_cta_how')}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border border-[var(--border-em)] bg-[var(--bg-card)] overflow-hidden"
          style={{ borderRadius: '16px 4px 16px 4px' }}>
          {[
            { n: 'Evidence-Based Rehabilitation Across All Diseases', key: 'hero_stat_1' },
            { n: 'Multispecialty Medical Coverage',  key: 'hero_stat_2' },
            { n: 'Multilingual Clinical Intelligence', key: 'hero_stat_3' },
            { n: 'Doctor-Governed Treatment Engine',   key: 'hero_stat_4' },
          ].map(({ n, key }, i) => (
            <div key={i} className={`py-6 text-center ${i < 3 ? 'border-r border-[var(--border)]' : ''} ${i >= 2 ? 'border-t border-[var(--border)] md:border-t-0' : ''}`}>
              <div className="font-serif text-[20px] md:text-[25px] text-[var(--text)] leading-none">{n}</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-1.5">{t(key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
