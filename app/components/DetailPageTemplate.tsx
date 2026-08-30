'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import type { DetailPageData } from '../lib/detail-data';

export function DetailPageTemplate({ data }: { data: DetailPageData }) {
  const { lang } = useLanguage();
  const l = <T extends { zh: string; en: string }>(value: T) => value[lang];
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;

  return <main>
    <section className={`detail-hero ${data.institutional ? 'institutional' : ''}`}>
      <p>{l(data.section)}</p><h1>{l(data.title)}</h1>
      <div><strong>{l(data.proposition)}</strong><span>{l(data.intro)}</span><Link href="/about/#consultation">{tr('预约初步沟通', 'Request an initial consultation')} ↗</Link></div>
    </section>
    <section className="detail-audience"><div><p>{tr('适用人群', 'WHO IT IS FOR')}</p><h2>{tr('先确认是否适合，\n再定义服务范围。', 'Confirm fit before\ndefining scope.')}</h2></div><ol>{data.audience.map((item, i) => <li key={item.zh}><span>0{i + 1}</span>{l(item)}</li>)}</ol></section>
    <section className="detail-process"><div><p>{tr('服务流程', 'DELIVERY PROCESS')}</p><h2>{tr('从诊断到复盘，\n每一步都有边界。', 'From diagnosis to review,\neach stage has boundaries.')}</h2></div><div>{data.process.map((item, i) => <article key={item.title.zh}><span>0{i + 1}</span><h3>{l(item.title)}</h3><p>{l(item.body)}</p></article>)}</div></section>
    <section className="detail-advantages"><div className="detail-section-heading"><p>{tr('工作方法', 'HOW WE WORK')}</p><h2>{tr('清晰、真实、可复盘', 'Clear, authentic and reviewable')}</h2></div><div>{data.advantages.map((item, i) => <article key={item.title.zh}><span>0{i + 1}</span><h3>{l(item.title)}</h3><p>{l(item.body)}</p></article>)}</div></section>
    <section className="detail-cases"><div className="detail-section-heading"><p>{tr('相关记录', 'RELATED RECORDS')}</p><h2>{tr('把方法放进真实情境', 'Methods in real contexts')}</h2></div><div>{data.relatedCases.map((item) => <Link href={item.href} key={item.title.zh}><small>{l(item.meta)}</small><h3>{l(item.title)}</h3><span>{tr('查看记录', 'View record')} ↗</span></Link>)}</div></section>
    <section className="detail-faq"><div><p>FAQ</p><h2>{tr('常见问题', 'Common questions')}</h2></div><div>{data.faq.map((item) => <details key={item.question.zh}><summary>{l(item.question)}<span>＋</span></summary><p>{l(item.answer)}</p></details>)}</div></section>
    <section className="page-cta"><p>{tr('需要进一步确认范围？', 'Need to confirm the right scope?')}</p><h2>{tr('从一次目标清晰的沟通开始。', 'Start with a focused conversation.')}</h2><Link href="/about/#consultation">{tr('提交咨询信息', 'Submit an enquiry')} ↗</Link></section>
  </main>;
}
