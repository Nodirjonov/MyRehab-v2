'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../lib/LangContext';
import { Lang } from '../lib/i18n';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { key: 'nav_link_how', href: '#pipeline' },
    { key: 'nav_link_spec', href: '#specialties' },
    { key: 'nav_link_safe', href: '#safety' },
    { key: 'nav_link_price', href: '#pricing' },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 h-[62px] flex items-center px-5 md:px-10 transition-all duration-300
        ${scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'}`}>

        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-9 h-9 rounded-[10px] bg-[var(--blue)] flex items-center justify-center shadow-[0_2px_12px_rgba(26,95,212,0.35)] group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="white" strokeWidth="1.5"/>
              <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="19" cy="5" r="3" fill="#10B981"/>
            </svg>
          </div>
          <div>
            <div className="font-serif text-[18px] leading-none text-[var(--text)]">MyRehab</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-0.5 ml-8">
          {links.map(({ key, href }) => (
            <a key={href} href={href}
              className="px-3.5 py-2 text-[13px] font-medium text-[var(--text-muted)] no-underline hover:text-[var(--text)] hover:bg-[var(--border)] rounded-lg transition-all">
              {t(key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden sm:flex gap-px bg-[var(--bg-2)] rounded-lg p-[3px] border border-[var(--border)]">
            {(['ru', 'uz', 'en'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider border-none cursor-pointer
                  ${lang === l
                    ? 'bg-[var(--blue)] text-white shadow-sm'
                    : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text)]'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-em)] cursor-pointer">
            {theme === 'dark'
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>

          <a href="#pricing"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[var(--blue)] text-white text-[13px] font-semibold no-underline hover:opacity-90 shadow-[0_2px_10px_rgba(26,95,212,0.3)]">
            {t('nav_trial')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <button onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--text-muted)] cursor-pointer border-none bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed top-[62px] inset-x-0 z-40 bg-[var(--bg-card)] border-b border-[var(--border)] md:hidden shadow-xl">
          <div className="p-4 flex flex-col gap-1">
            {links.map(({ key, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                className="px-4 py-3.5 rounded-xl text-[14px] text-[var(--text-2)] no-underline hover:bg-[var(--bg-2)] hover:text-[var(--text)]">
                {t(key)}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-[var(--border)]">
              <div className="flex gap-px bg-[var(--bg-2)] rounded-lg p-[3px] border border-[var(--border)] mr-auto">
                {(['ru', 'uz', 'en'] as Lang[]).map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-bold border-none cursor-pointer
                      ${lang === l ? 'bg-[var(--blue)] text-white' : 'bg-transparent text-[var(--text-muted)]'}`}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <button onClick={toggle}
                className="flex-1 py-2 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] text-[var(--text-muted)] text-[13px] cursor-pointer">
                {theme === 'dark' ? t('theme_light') : t('theme_dark')}
              </button>
            </div>
            <a href="#pricing"
              className="mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--blue)] text-white text-[14px] font-semibold no-underline">
              {t('nav_trial')} →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
