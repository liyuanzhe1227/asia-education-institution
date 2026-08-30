'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { assetPath } from '../lib/site-data';

const menus = [
  {
    href: '/services/', zh: '服务中心', en: 'Services',
    children: [
      ['/services/#admissions', '升学与申请', 'Admissions'],
      ['/services/#research', '学术与研究', 'Academic & Research'],
      ['/services/#career', '职业与人才', 'Career & Talent'],
    ],
  },
  {
    href: '/cases/', zh: '案例中心', en: 'Case Library',
    children: [
      ['/cases/#overview', '申请数量', 'Application Data'],
      ['/cases/#year-analysis', '年度项目分析', 'Annual Analysis'],
      ['/cases/#analysis', '匿名案例分析', 'Case Analysis'],
      ['/cases/#outcomes', '录取方向', 'Outcome Areas'],
    ],
  },
  {
    href: '/programmes/', zh: '国际项目', en: 'Programmes',
    children: [
      ['/programmes/#immersion', '全真课堂', 'Immersion'],
      ['/programmes/#internship', '短期实习', 'Internships'],
      ['/programmes/#executive', '机构研修', 'Executive Visits'],
    ],
  },
  {
    href: '/partnerships/', zh: '院校合作', en: 'Partnerships',
    children: [
      ['/partnerships/#models', '合作模式', 'Models'],
      ['/partnerships/#experience', '过往经验', 'Experience'],
      ['/partnerships/#process', '合作流程', 'Process'],
    ],
  },
  {
    href: '/about/', zh: '关于 AEI', en: 'About AEI',
    children: [
      ['/about/#profile', '机构简介', 'Profile'],
      ['/about/#principles', '服务原则', 'Principles'],
      ['/about/#contact', '联系 AEI', 'Contact'],
    ],
  },
];

export function SiteHeader() {
  const { lang, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareLabel = copied ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '分享' : 'Share');

  async function shareSite() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: document.title, url });
      else await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { /* User cancelled native sharing. */ }
  }

  return (
    <>
      <div className="utility-bar">
        <span>{lang === 'zh' ? '新加坡教育与国际合作平台' : 'Singapore education and global partnership platform'}</span>
        <div><a href="mailto:eric2015aei@gmail.com">eric2015aei@gmail.com</a><a href="tel:+6586267896">+65 8626 7896</a></div>
      </div>
      <header className="lux-header">
        <Link className="lux-brand" href="/" aria-label={lang === 'zh' ? '亚瑟（新加坡）教育学院首页' : 'Asia Education Institution home'}>
          <img src={assetPath('aei-mark.jpg')} alt="" />
          <span><strong>AEI</strong><small>{lang === 'zh' ? '亚瑟（新加坡）教育学院' : 'Asia Education Institution'}</small></span>
        </Link>
        <nav className="desktop-nav" aria-label={lang === 'zh' ? '主导航' : 'Primary navigation'}>
          {menus.map((menu) => (
            <div className="nav-group" key={menu.href}>
              <Link href={menu.href}>{lang === 'zh' ? menu.zh : menu.en}<span>⌄</span></Link>
              <div className="submenu">
                <small>{lang === 'zh' ? `${menu.zh}导航` : `${menu.en} navigation`}</small>
                {menu.children.map(([href, zh, en], index) => <Link key={href} href={href}><b>0{index + 1}</b>{lang === 'zh' ? zh : en}<span>→</span></Link>)}
              </div>
            </div>
          ))}
        </nav>
        <div className="lux-actions">
          <button type="button" onClick={shareSite}>{shareLabel}</button>
          <button type="button" onClick={toggleLanguage}>{lang === 'zh' ? 'EN' : '中文'}</button>
          <button className="menu-toggle" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={lang === 'zh' ? '菜单' : 'Menu'}>{mobileOpen ? '×' : '≡'}</button>
        </div>
      </header>
      {mobileOpen && <div className="mobile-menu">{menus.map((menu) => <details key={menu.href}><summary>{lang === 'zh' ? menu.zh : menu.en}</summary>{menu.children.map(([href, zh, en]) => <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{lang === 'zh' ? zh : en}<span>→</span></Link>)}</details>)}</div>}
    </>
  );
}
