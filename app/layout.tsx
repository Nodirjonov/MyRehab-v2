import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '../lib/LangContext';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'MyRehab — AI Rehabilitation Platform',
  description: 'SaMD-grade AI clinical intelligence. 14 specialties. 916 exercises. Doctor-approved plans.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
