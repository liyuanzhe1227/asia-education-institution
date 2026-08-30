'use client';
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from '../components/LanguageProvider';
import { assetPath, programmeTracks } from '../lib/site-data';

export default function ProgrammesPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  return <main>
    <section className="inner-hero programme-hero"><p>03 / GLOBAL PROGRAMMES</p><h1>{tr('国际学习项目', 'Global Programmes')}</h1><div><strong>{tr('不只是参观，而是有目标的学习设计', 'More than a visit: learning by design')}</strong><span>{tr('课程、校园、企业、城市与成果展示被组织为同一条学习路径。', 'Courses, campuses, companies, cities and final presentation form one connected learning pathway.')}</span></div></section>
    <section className="programme-lead"><img src={assetPath('campus-group.jpg')} alt="Past AEI campus learning experience" /><div><p>{tr('新加坡作为真实课堂', 'SINGAPORE AS A LIVING CLASSROOM')}</p><h2>{tr('把课堂知识放进真实环境。', 'Place learning in a real environment.')}</h2><span>{tr('项目周期、课程主题、接待资源与参访安排均需在正式确认后执行；宣传页面不替代最终项目方案。', 'Duration, curriculum, hosts and visits remain subject to formal confirmation; this page does not replace a final programme proposal.')}</span></div></section>
    <section className="programme-track-list">{programmeTracks.map((track, i) => <article id={['immersion', 'academic', 'internship', 'executive'][i]} key={track.number}><div><span>{track.number}</span><small>{track.duration}</small></div><h2>{lang === 'zh' ? track.title.zh : track.title.en}</h2><p>{lang === 'zh' ? track.body.zh : track.body.en}</p><b>↗</b></article>)}</section>
    <section className="programme-design"><div><p>PROGRAMME ARCHITECTURE</p><h2>{tr('五层项目结构', 'Five-layer programme architecture')}</h2></div><ol>{[[tr('主题', 'Theme'), tr('AI、可持续、STEM、商业创新或专业主题', 'AI, sustainability, STEM, business innovation or a specialist theme')],[tr('学习', 'Learning'), tr('讲座、案例、工作坊与团队任务', 'Lectures, cases, workshops and team assignments')],[tr('场景', 'Context'), tr('校园、实验室、企业与城市参访', 'Campus, laboratory, company and city visits')],[tr('产出', 'Output'), tr('展示、报告、反思与项目证明', 'Presentation, report, reflection and completion evidence')],[tr('保障', 'Assurance'), tr('筛选、行前、接待、风险与复盘', 'Selection, preparation, hosting, risk and review')]].map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
  </main>;
}
