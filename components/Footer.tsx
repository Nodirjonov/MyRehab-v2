'use client';
import { useLang } from '../lib/LangContext';

export default function Footer() {
  const { t } = useLang();

  const links = ['ft_privacy','ft_terms','ft_clinics','ft_contact','ft_hipaa'];

  return (
    <footer className="border-t border-[var(--border)] px-5 md:px-10 py-8 bg-[var(--bg-2)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[var(--blue)] flex items-center justify-center">
            <span className="font-serif text-white font-bold text-[12px]">M</span>
          </div>
          <span className="font-serif text-[16px] text-[var(--text-2)]">MyRehab</span>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {links.map(key => (
            <a key={key} href="#" className="text-[12px] text-[var(--text-muted)] no-underline hover:text-[var(--text)] transition-colors">
              {t(key)}
            </a>
          ))}
        </div>

        <div className="text-[11px] text-[var(--text-muted)] text-center leading-relaxed">
          {t('ft_copy')}<br />
          <span className="text-[var(--border-em)]">{t('ft_tags')}</span>
        </div>
      </div>
    </footer>
  );
}
