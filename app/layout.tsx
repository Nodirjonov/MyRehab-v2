import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LangProvider } from '../lib/LangContext';
import { ThemeProvider } from '../context/ThemeContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'MyRehab — AI Rehabilitation Platform',
  description: 'SaMD-grade AI clinical intelligence. 14 specialties. 916 exercises. Doctor-approved plans.',
};

/* ──────────────────────────────────────────────────────────────────
   Inline script to detect in-app browsers (Telegram, Instagram,
   Facebook, LINE, etc.) and set --inapp-top CSS variable BEFORE
   first paint. This avoids any layout shift — the spacer div in
   Hero.tsx and the fixed navbar in Navbar.tsx already read this
   variable, so by the time CSS is evaluated the value is correct.

   Telegram iOS WKWebView adds ~32px of overlay controls
   (close button, ˅, ⋯) that sit BELOW env(safe-area-inset-top).
   Those controls are native UIKit overlays, not part of the web
   content — there is no CSS API for them. We detect them by UA
   and add a structural offset.
   ────────────────────────────────────────────────────────────── */
const inappDetectScript = `
(function(){
  try {
    var ua = navigator.userAgent || '';
    var isInApp = /Telegram|Instagram|FBAN|FBAV|Line\\//i.test(ua);
    if (isInApp) {
      document.documentElement.style.setProperty('--inapp-top', '32px');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Blocking script: runs before first paint to set --inapp-top */}
        <script dangerouslySetInnerHTML={{ __html: inappDetectScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
