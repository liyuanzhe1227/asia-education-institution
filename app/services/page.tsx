'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';
import { serviceGroups } from '../lib/site-data';

export default function ServicesPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  return <main>
    <section className="inner-hero"><p>{tr('01 / 服务中心', '01 / SERVICES')}</p><h1>{tr('服务中心', 'Service Centre')}</h1><div><strong>{tr('从单项需求到完整路径', 'From a single need to a connected pathway')}</strong><span>{tr('每条业务线都有明确边界、交付节点与组合方式。', 'Each pathway has a defined scope, delivery milestones and combination logic.')}</span></div></section>
    <section className="service-detail-list">
      {serviceGroups.map((service) => <article id={service.slug} key={service.slug}><div className="service-detail-index"><span>{service.number}</span><small>{tr(`第 ${service.number} 条业务线`, `PATHWAY ${service.number}`)}</small></div><div className="service-detail-main"><h2>{lang === 'zh' ? service.title.zh : service.title.en}</h2><p>{lang === 'zh' ? service.summary.zh : service.summary.en}</p></div><ol>{service.items.map((item, i) => <li key={item.zh}><b>0{i + 1}</b>{lang === 'zh' ? item.zh : item.en}</li>)}</ol></article>)}
    </section>
    <section className="delivery-model"><div><p>{tr('AEI / 服务方法', 'AEI / METHOD')}</p><h2>{tr('四步交付模型', 'Four-stage delivery model')}</h2></div><div className="delivery-steps">{[[tr('诊断', 'Discover'), tr('目标、背景、约束和成功标准', 'Goals, profile, constraints and success criteria')],[tr('设计', 'Design'), tr('路径、范围、时间和责任分工', 'Pathway, scope, timeline and responsibilities')],[tr('执行', 'Deliver'), tr('材料、导师、院校与项目协同', 'Materials, mentors, institutions and programme coordination')],[tr('复盘', 'Review'), tr('结果、证据、改进与下一阶段', 'Outcome, evidence, improvement and next stage')]].map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="page-cta"><p>{tr('不确定从哪一条业务线开始？', 'Not sure where to begin?')}</p><h2>{tr('先从一次目标诊断开始。', 'Start with a goal diagnosis.')}</h2><Link href="/about/#contact">{tr('联系 AEI', 'Contact AEI')} ↗</Link></section>
  </main>;
}
