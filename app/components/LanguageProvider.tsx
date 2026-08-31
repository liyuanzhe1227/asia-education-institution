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
      admissions: { zh: '升学与申请｜AEI', en: 'Admissions & Pathways | AEI' },
      research: { zh: '学术与研究发展｜AEI', en: 'Academic & Research Development | AEI' },
      career: { zh: '职业与人才发展｜AEI', en: 'Career & Talent Development | AEI' },
      immersion: { zh: '新加坡全真课堂｜AEI', en: 'Singapore Immersion Classroom | AEI' },
      internships: { zh: '海外短期实习｜AEI', en: 'International Short Internship | AEI' },
      training: { zh: '机构培训与研修｜AEI', en: 'Institutional Training | AEI' },
      evidence: { zh: '证据与透明度｜AEI', en: 'Evidence & Transparency | AEI' },
      privacy: { zh: '隐私与网站说明｜AEI', en: 'Privacy & Website Notice | AEI' },
      mobility: { zh: '签证、永居与身份规划｜AEI', en: 'Visa, Residence & Citizenship | AEI' },
    };
    document.title = titles[page]?.[lang] ?? titles.home[lang];
  }, [lang]);

  useEffect(() => {
    function scrollToCurrentHash() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(decodeURIComponent(id));
      if (target) target.scrollIntoView({ block: 'start' });
    }

    const timers = [180, 700, 1500].map((delay) => window.setTimeout(scrollToCurrentHash, delay));
    window.addEventListener('load', scrollToCurrentHash);
    window.addEventListener('hashchange', scrollToCurrentHash);
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('load', scrollToCurrentHash);
      window.removeEventListener('hashchange', scrollToCurrentHash);
    };
  }, []);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
