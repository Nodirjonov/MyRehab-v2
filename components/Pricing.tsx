'use client';
import { useLang } from '../lib/LangContext';

export default function Pricing() {
  const { t } = useLang();

  const plans = [
    {
      nameKey: 'plan1_name', priceKey: 'plan1_price', perKey: 'plan1_per', descKey: 'plan1_desc',
      features: ['plan1_f1','plan1_f2','plan1_f3','plan1_f4','plan1_f5','plan1_f6'],
      featured: false, ctaKey: 'plan1_cta', clinicKey: 'plan1_clinic',
      radius: '4px 20px 20px 20px', popularKey: null,
    },
    {
      nameKey: 'plan2_name', priceKey: 'plan2_price', perKey: 'plan2_per', descKey: 'plan2_desc',
      features: ['plan2_f1','plan2_f2','plan2_f3','plan2_f4','plan2_f5','plan2_f6'],
      featured: true, ctaKey: 'plan2_cta', clinicKey: 'plan2_clinic',
      radius: '20px', popularKey: 'plan2_popular',
    },
    {
      nameKey: 'plan3_name', priceKey: 'plan3_price', perKey: 'plan3_per', descKey: 'plan3_desc',
      features: ['plan3_f1','plan3_f2','plan3_f3','plan3_f4'],
      featured: false, ctaKey: 'plan3_cta', clinicKey: 'plan3_clinic',
      radius: '20px 20px 4px 20px', popularKey: null,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 px-5 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">

        <div className="reveal text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-[var(--blue-bg)] bg-[var(--blue-bg)] text-[var(--blue)] text-[11px] font-bold tracking-widest uppercase rounded-sm">
            {t('price_label')}
          </div>
          <h2 className="font-serif text-[var(--blue)] font-normal leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            {t('price_h2_1')}<br />
          </h2>
          <p className="text-[var(--text-2)] text-[15px] max-w-lg mx-auto leading-relaxed">{t('price_sub')}</p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map(({ nameKey, priceKey, perKey, descKey, features, featured, ctaKey, clinicKey, radius, popularKey }) => (
            <div key={nameKey} className={`p-7 border transition-all duration-200 group hover:-translate-y-1
              ${featured
                ? 'bg-[var(--blue)] border-transparent shadow-[0_8px_40px_rgba(26,95,212,0.35)]'
                : 'bg-[var(--bg-card)] border-[var(--border-em)] hover:border-[var(--blue)]'}`}
              style={{ borderRadius: radius }}>

              {popularKey && (
                <div className="inline-block px-3 py-1 mb-4 bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded-sm">
                  {t(popularKey)}
                </div>
              )}

              <div className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${featured ? 'text-white/60' : 'text-[var(--text-muted)]'}`}>
                {t(nameKey)}
              </div>

              <div className={`font-serif leading-none mb-1 ${featured ? 'text-white' : 'text-[var(--text)]'}`}
                style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                {t(priceKey)}
                <span className={`text-[15px] ml-1 ${featured ? 'text-white/60' : 'text-[var(--text-muted)]'}`}>{t(perKey)}</span>
              </div>

              <p className={`text-[13px] mt-[15px] leading-relaxed mb-6 ${featured ? 'text-white/70' : 'text-[var(--text-2)]'}`}>{t(descKey)}</p>

              <div className={`h-px mb-5 ${featured ? 'bg-white/20' : 'bg-[var(--border-em)]'}`} />

              <ul className="space-y-2.5 mb-7">
                {features.map((fKey) => (
                  <li key={fKey} className={`flex items-center gap-2.5 text-[13px] ${featured ? 'text-white/85' : 'text-[var(--text-2)]'}`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={featured ? 'white' : 'var(--green)'} strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {t(fKey)}
                  </li>
                ))}
              </ul>

              <a href="#"
                className={`block text-center py-3 text-[13px] font-semibold no-underline transition-all duration-150
                  ${featured
                    ? 'bg-white text-[var(--blue)] hover:bg-white/90 rounded-xl'
                    : 'border border-[var(--border-em)] text-[var(--text-2)] hover:border-[var(--blue)] hover:text-[var(--blue)] rounded-lg'}`}
                style={{ borderRadius: featured ? '10px' : undefined }}>
                {t(ctaKey)}
              </a>

              <div className={`text-[11px] text-center mt-3 ${featured ? 'text-white/40' : 'text-[var(--text-muted)]'}`}>
                {t(clinicKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
