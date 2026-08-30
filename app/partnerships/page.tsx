'use client';
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from '../components/LanguageProvider';
import { assetPath, partnershipModels } from '../lib/site-data';
import Link from 'next/link';

export default function PartnershipsPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  return <main>
    <section className="inner-hero partnership-hero"><p>{tr('04 / 院校与科研合作', '04 / PARTNERSHIPS')}</p><h1>{tr('院校与科研合作', 'Institutional Partnerships')}</h1><div><strong>{tr('从合作意向到可执行机制', 'From shared intent to an operating model')}</strong><span>{tr('围绕目标、范围、治理、资源与年度复盘，建立能够持续运行的合作结构。', 'A durable structure built around objectives, scope, governance, resources and annual review.')}</span></div></section>
    <section className="partnership-models" id="models">{partnershipModels.map((model, i) => <article key={model.title.zh}><span>0{i + 1}</span><h2>{lang === 'zh' ? model.title.zh : model.title.en}</h2><p>{lang === 'zh' ? model.body.zh : model.body.en}</p></article>)}</section>
    <section className="partnership-experience" id="experience"><div className="partnership-photo"><img src={assetPath('scu-ntu-summer.jpg')} alt={tr('历史大学暑期项目', 'Past university summer programme')} /></div><div><p>{tr('部分过往经验', 'SELECTED PAST EXPERIENCE')}</p><h2>{tr('以过往经验证明协调能力，\n不以校名暗示当前授权。', 'Experience demonstrates coordination—\nnot current institutional endorsement.')}</h2><ul><li><span>2018</span>{tr('郑州大学材料相关课题组与新加坡高校课题组交流访问', 'Research-group exchange involving materials teams from Zhengzhou and Singapore')}</li><li><span>2019</span>{tr('同济大学—南洋理工大学研究生国际学术论坛协调', 'Tongji–NTU postgraduate academic forum coordination')}</li><li><span>2019</span>{tr('四川大学—南洋理工大学暑期访学与学习项目', 'Sichuan University–NTU summer learning programme')}</li><li><span>2025</span>{tr('土木与环境工程院校合作框架与合作备忘录讨论支持', 'Support for a civil and environmental engineering partnership and MoU discussion')}</li></ul><small>{tr('院校名称仅用于描述历史项目背景；当前项目须以相关院校书面确认为准。', 'Institution names describe historical programme context only; current activity requires written institutional confirmation.')}</small></div></section>
    <section className="partnership-process" id="process"><div><p>{tr('合作流程', 'COOPERATION PROCESS')}</p><h2>{tr('合作不是一份文件，\n而是一套运行机制。', 'A partnership is not a document.\nIt is an operating system.')}</h2></div><ol>{[[tr('需求对齐', 'Alignment'), tr('明确双方目标、对象、资源与边界', 'Objectives, audiences, resources and boundaries')],[tr('方案设计', 'Design'), tr('形成项目结构、责任、时间与预算框架', 'Programme, responsibilities, timeline and budget framework')],[tr('正式确认', 'Confirmation'), tr('由相关院校和机构审核并书面确认', 'Formal institutional review and written confirmation')],[tr('实施治理', 'Governance'), tr('联络人、项目节点、风险与质量管理', 'Liaisons, milestones, risk and quality management')],[tr('年度复盘', 'Annual Review'), tr('检视成果、问题与下一年度计划', 'Outcomes, issues and next-year plan')]].map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
    <section className="institutional-training-cta"><p>{tr('机构培训与研修', 'INSTITUTIONAL TRAINING')}</p><h2>{tr('把机构研修放回 B 端合作体系。', 'Institutional training belongs in the B2B partnership pathway.')}</h2><span>{tr('面向院校、企业与公共机构，单独设计目标、内容、治理与成果。', 'For universities, companies and public bodies, with dedicated objectives, content, governance and outcomes.')}</span><Link href="/partnerships/training/">{tr('查看机构培训与研修', 'Explore institutional training')} ↗</Link></section>
  </main>;
}
