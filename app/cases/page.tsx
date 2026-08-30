'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { applicationYears, caseMetrics, detailedCases, outcomeGroups } from '../lib/site-data';

const filters = [
  ['all', '全部案例', 'All cases'], ['master', '硕士申请', 'Master’s'],
  ['phd', '博士申请', 'Doctoral'], ['complex', '特殊背景', 'Complex profile'],
];

export default function CasesPage() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const visibleCases = detailedCases.filter((item) => filter === 'all' || item.category === filter);
  return <main>
    <section className="inner-hero case-hero"><p>02 / CASE LIBRARY</p><h1>{tr('案例与数据中心', 'Cases & Evidence')}</h1><div><strong>{tr('匿名、分层、可追溯', 'Anonymised, structured, traceable')}</strong><span>{tr('展示背景、难点、策略与结果；不公开姓名、证件、文书或敏感材料。', 'Showing profile, challenge, strategy and outcome—never names, IDs, essays or sensitive documents.')}</span></div></section>
    <section className="case-metrics" id="overview">{caseMetrics.map((metric) => <article key={metric.zh}><strong>{metric.value}</strong><p>{lang === 'zh' ? metric.zh : metric.en}</p></article>)}</section>
    <section className="case-data-block"><div className="case-data-title"><p>2016—2026</p><h2>{tr('年度申请与服务档案', 'Annual application & service archive')}</h2><span>{tr('口径说明：按年度归档项目计数，不等同于录取人数或成功率。', 'Definition: annual archived service projects, not admitted students or a success rate.')}</span></div><div className="case-year-table">{applicationYears.map(({ year, count }) => <div key={year}><span>{year}</span><strong>{count}</strong><i style={{ width: `${count / 22 * 100}%` }} /></div>)}</div></section>
    <section className="case-library-section" id="analysis"><div className="case-library-header"><div><p>ANONYMISED ANALYSIS</p><h2>{tr('深度匿名案例分析', 'Detailed anonymised case analysis')}</h2></div><div className="case-filters" role="group" aria-label="Case filters">{filters.map(([value, zh, en]) => <button className={filter === value ? 'active' : ''} type="button" onClick={() => setFilter(value)} key={value}>{tr(zh, en)}</button>)}</div></div><div className="detailed-case-grid">{visibleCases.map((item) => <article key={item.id}><div className="case-card-top"><span>{item.year}</span><small>{lang === 'zh' ? item.categoryLabel.zh : item.categoryLabel.en}</small></div><h3>{lang === 'zh' ? item.title.zh : item.title.en}</h3><dl><div><dt>{tr('背景', 'PROFILE')}</dt><dd>{lang === 'zh' ? item.profile.zh : item.profile.en}</dd></div><div><dt>{tr('核心难点', 'CHALLENGE')}</dt><dd>{lang === 'zh' ? item.challenge.zh : item.challenge.en}</dd></div><div><dt>{tr('策略拆解', 'STRATEGY')}</dt><dd>{lang === 'zh' ? item.strategy.zh : item.strategy.en}</dd></div><div className="result"><dt>{tr('历史结果', 'OUTCOME')}</dt><dd>{lang === 'zh' ? item.result.zh : item.result.en}</dd></div></dl></article>)}</div></section>
    <section className="outcome-section" id="outcomes"><div className="outcome-intro"><p>RESULT EVIDENCE</p><h2>{tr('历史录取证据覆盖方向', 'Programme areas in archived outcome evidence')}</h2><span>{tr('以下为归档录取结果图片中出现的项目方向，不代表当前合作关系或未来录取承诺。', 'Areas appearing in archived admission-result images; they do not imply current affiliation or future outcomes.')}</span></div><div className="outcome-groups">{outcomeGroups.map((group, i) => <article key={group.title.zh}><span>0{i + 1}</span><h3>{lang === 'zh' ? group.title.zh : group.title.en}</h3>{group.programmes.map((programme) => <p key={programme}>{programme}<b>↗</b></p>)}</article>)}</div></section>
  </main>;
}
