'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';
import { serviceGroups } from '../lib/site-data';

export default function ServicesPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  return <main>
    <section className="inner-hero"><p>{tr('01 / 个人成长服务', '01 / PERSONAL SERVICES')}</p><h1>{tr('个人成长服务', 'Personal Services')}</h1><div><strong>{tr('为学生、研究者与职场新人整理下一步', 'Structuring the next step for students, researchers and early-career professionals')}</strong><span>{tr('升学申请、学术研究与职业发展分别形成独立服务路径。', 'Admissions, research and career development are presented as distinct service pathways.')}</span></div></section>
    <section className="service-detail-list">
      {serviceGroups.filter((service) => ['admissions', 'research', 'career'].includes(service.slug)).map((service) => <article id={service.slug} key={service.slug}><div className="service-detail-index"><span>{service.number}</span><small>{tr('个人成长路径', 'PERSONAL PATHWAY')}</small></div><div className="service-detail-main"><h2>{lang === 'zh' ? service.title.zh : service.title.en}</h2><p>{lang === 'zh' ? service.summary.zh : service.summary.en}</p><Link className="method-link" href={`/services/${service.slug}/`}>{tr('查看服务详情', 'View service details')} →</Link></div><ol>{service.items.map((item, i) => <li key={item.zh}><b>0{i + 1}</b>{lang === 'zh' ? item.zh : item.en}</li>)}</ol></article>)}
    </section>
    <section className="delivery-model"><div><p>{tr('AEI / 服务方法', 'AEI / METHOD')}</p><h2>{tr('四步交付模型', 'Four-stage delivery model')}</h2></div><div className="delivery-steps">{[[tr('诊断', 'Discover'), tr('目标、背景、约束和成功标准', 'Goals, profile, constraints and success criteria')],[tr('设计', 'Design'), tr('路径、范围、时间和责任分工', 'Pathway, scope, timeline and responsibilities')],[tr('执行', 'Deliver'), tr('材料、导师、院校与项目协同', 'Materials, mentors, institutions and programme coordination')],[tr('复盘', 'Review'), tr('结果、证据、改进与下一阶段', 'Outcome, evidence, improvement and next stage')]].map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="page-cta"><p>{tr('不确定从哪一条业务线开始？', 'Not sure where to begin?')}</p><h2>{tr('先从一次目标诊断开始。', 'Start with a goal diagnosis.')}</h2><Link href="/about/#consultation">{tr('预约咨询', 'Request a consultation')} ↗</Link></section>
  </main>;
}
