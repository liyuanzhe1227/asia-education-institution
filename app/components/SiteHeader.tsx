'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { assetPath } from '../lib/site-data';

const menus = [
  {
    href: '/services/', zh: '个人成长服务', en: 'Personal Services',
    children: [
      ['/services/admissions/', '升学与申请', 'Admissions'],
      ['/services/research/', '学术与研究发展', 'Academic & Research'],
      ['/services/career/', '职业与人才发展', 'Career & Talent'],
    ],
  },
  {
    href: '/china/', zh: '中国家庭服务', en: 'China Family Services',
    children: [
      ['/china/#stages', '全龄升学路径', 'All-stage Pathways'],
      ['/china/#competitions', '竞赛与创新项目', 'Competitions & Innovation'],
      ['/china/#cross-border', '跨国服务机制', 'Cross-border Model'],
      ['/cases/#illustrative', '典型情境与综合示例', 'Illustrative Scenarios'],
    ],
  },
  {
    href: '/cases/', zh: '案例中心', en: 'Case Library',
    children: [
      ['/cases/#overview', '项目量级', 'Project Volume'],
      ['/cases/#year-analysis', '年度项目分析', 'Annual Analysis'],
      ['/cases/#analysis', '匿名案例分析', 'Case Analysis'],
      ['/evidence/', '证据与透明度', 'Evidence & Transparency'],
    ],
  },
  {
    href: '/programmes/', zh: '国际游学项目', en: 'Study Programmes',
    children: [
      ['/programmes/immersion/', '全真课堂', 'Immersion'],
      ['/programmes/internships/', '短期实习', 'Internships'],
    ],
  },
  {
    href: '/partnerships/', zh: '院校与机构合作', en: 'Institutions',
    children: [
      ['/partnerships/#models', '合作模式', 'Models'],
      ['/partnerships/#experience', '过往经验', 'Experience'],
      ['/partnerships/#process', '合作流程', 'Process'],
      ['/partnerships/training/', '机构培训与研修', 'Institutional Training'],
    ],
  },
  {
    href: '/mobility/', zh: '签证与身份', en: 'Mobility',
    children: [
      ['/mobility/#scope', '业务范围', 'Service Scope'],
      ['/mobility/#destinations', '国家与地区', 'Destinations'],
      ['/mobility/#talent', '人才项目', 'Talent Programmes'],
      ['/mobility/#citizenship', '永居与公民身份', 'Residence & Citizenship'],
    ],
  },
  {
    href: '/about/', zh: '关于 AEI', en: 'About AEI',
    children: [
      ['/about/#profile', '机构简介', 'Profile'],
      ['/about/#registry', '注册信息', 'Registration'],
      ['/about/#team', '责任团队', 'Accountability'],
      ['/about/#network', '协作网络', 'Collaboration Network'],
      ['/about/#principles', '服务原则', 'Principles'],
      ['/about/#consultation', '预约咨询', 'Consultation'],
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
        <span>{lang === 'zh' ? '新加坡注册 · 中国家庭与全球教育服务' : 'Singapore-registered · China family and global education services'}</span>
        <div><a href="mailto:eric2015aei@gmail.com">eric2015aei@gmail.com</a><a href="tel:+6586267896">+65 8626 7896</a></div>
      </div>
      <header className="lux-header">
        <a className="lux-brand" href="/" aria-label={lang === 'zh' ? '亚瑟（新加坡）教育学院首页' : 'Asia Education Institution home'}>
          <img src={assetPath('aei-mark.jpg')} alt={lang === 'zh' ? '亚瑟（新加坡）教育学院' : 'Asia Education Institution'} />
        </a>
        <nav className="desktop-nav" aria-label={lang === 'zh' ? '主导航' : 'Primary navigation'}>
          {menus.map((menu) => (
            <div className="nav-group" key={menu.href}>
              <a href={menu.href}>{lang === 'zh' ? menu.zh : menu.en}<span>⌄</span></a>
              <div className="submenu">
                <small>{lang === 'zh' ? `${menu.zh}导航` : `${menu.en} navigation`}</small>
                {menu.children.map(([href, zh, en], index) => <a key={href} href={href}><b>0{index + 1}</b>{lang === 'zh' ? zh : en}<span>→</span></a>)}
              </div>
            </div>
          ))}
        </nav>
        <div className="lux-actions">
          <a className="header-consult" href="/about/#consultation">{lang === 'zh' ? '咨询' : 'Consult'}</a>
          <button type="button" onClick={shareSite}>{shareLabel}</button>
          <button type="button" onClick={toggleLanguage}>{lang === 'zh' ? 'EN' : '中文'}</button>
          <button className="menu-toggle" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={lang === 'zh' ? '菜单' : 'Menu'}>{mobileOpen ? '×' : '≡'}</button>
        </div>
      </header>
      {mobileOpen && <div className="mobile-menu">{menus.map((menu) => <details key={menu.href}><summary>{lang === 'zh' ? menu.zh : menu.en}</summary>{menu.children.map(([href, zh, en]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{lang === 'zh' ? zh : en}<span>→</span></a>)}</details>)}</div>}
    </>
  );
}
