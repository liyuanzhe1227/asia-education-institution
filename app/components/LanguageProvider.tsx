'use client';

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
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

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    document.documentElement.dataset.lang = lang;
    const path = window.location.pathname.replace(/\/$/, '');
    const page = path.split('/').pop() || 'home';
    const titles: Record<string, { zh: string; en: string }> = {
      home: { zh: 'AEI｜亚瑟（新加坡）教育学院', en: 'AEI | Asia Education Institution' },
      services: { zh: '服务中心｜AEI', en: 'Services | AEI' },
      cases: { zh: '案例与数据中心｜AEI', en: 'Cases & Evidence | AEI' },
      programmes: { zh: '国际学习项目｜AEI', en: 'Global Programmes | AEI' },
      partnerships: { zh: '院校与科研合作｜AEI', en: 'Institutional Partnerships | AEI' },
      about: { zh: '关于 AEI｜亚瑟（新加坡）教育学院', en: 'About AEI | Asia Education Institution' },
    };
    document.title = titles[page]?.[lang] ?? titles.home[lang];
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
