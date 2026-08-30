'use client';

import { createContext, useContext, useMemo, useSyncExternalStore } from 'react';
import type { Lang } from '../lib/site-data';

type LanguageContextValue = { lang: Lang; toggleLanguage: () => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore<Lang>(
    (notify) => {
      window.addEventListener('storage', notify);
      window.addEventListener('aei-language-change', notify);
      return () => {
        window.removeEventListener('storage', notify);
        window.removeEventListener('aei-language-change', notify);
      };
    },
    () => window.localStorage.getItem('aei-language') === 'en' ? 'en' : 'zh',
    () => 'zh',
  );

  const value = useMemo(() => ({
    lang,
    toggleLanguage: () => {
      const next = lang === 'zh' ? 'en' : 'zh';
      window.localStorage.setItem('aei-language', next);
      window.dispatchEvent(new Event('aei-language-change'));
    },
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
