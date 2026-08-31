'use client';
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from './components/LanguageProvider';
import { applicationYears, assetPath, caseMetrics, detailedCases, serviceGroups } from './lib/site-data';

export default function Home() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const serviceHref: Record<string, string> = {
    admissions: '/services/admissions/', research: '/services/research/', career: '/services/career/',
    global: '/programmes/', partnerships: '/partnerships/', executive: '/partnerships/training/', mobility: '/mobility/',
  };

  return (
    <main>
      <section className="lux-hero">
        <div className="hero-index">{tr('亚瑟教育 / 2015—2026', 'AEI / 2015—2026')}</div>
        <div className="lux-hero-copy">
          <p className="lux-kicker">{tr('新加坡 · 教育与国际合作', 'SINGAPORE · EDUCATION & GLOBAL CONNECTION')}</p>
          <h1>{tr('让每一种成长，\n都有清晰路径。', 'A clearer pathway\nfor every ambition.')}</h1>
          <p>{tr('从升学申请、学术研究到国际项目与院校合作，AEI 将复杂选择整理为可执行、可复盘的长期路径。', 'From admissions and research to global programmes and institutional partnerships, AEI turns complex choices into structured, reviewable pathways.')}</p>
          <div className="lux-hero-actions"><a className="solid-cta" href="/services/">{tr('进入服务中心', 'Explore services')}<span>↗</span></a><a className="line-cta" href="/cases/">{tr('查看匿名案例', 'View anonymised cases')}<span>→</span></a></div>
        </div>
        <div className="lux-hero-art" aria-hidden="true">
          <div className="art-disc"><span>AEI</span><small>{tr('新加坡', 'SINGAPORE')}</small></div>
          <div className="art-ring ring-a" /><div className="art-ring ring-b" />
          <p>{lang === 'zh' ? <>教育<br />研究<br />机遇</> : <>EDUCATION<br />RESEARCH<br />OPPORTUNITY</>}</p>
        </div>
        <div className="hero-scroll">{tr('向下浏览', 'SCROLL')} <span>↓</span></div>
      </section>

      <section className="archive-band">
        <div><small>{tr('档案范围', 'ARCHIVE RANGE')}</small><strong>2016—2026</strong></div>
        {caseMetrics.slice(0, 3).map((metric) => <div key={metric.value + metric.zh}><strong>{metric.value}</strong><span>{lang === 'zh' ? metric.zh : metric.en}</span></div>)}
      </section>

      <section className="editorial-section home-services">
        <div className="editorial-heading"><p>01 / {tr('业务体系', 'PATHWAYS')}</p><h2>{tr('七条业务线，\n一个完整成长系统', 'Seven pathways.\nOne connected system.')}</h2><a href="/services/">{tr('查看服务架构', 'Explore the service architecture')} →</a></div>
        <div className="service-mosaic">
          {serviceGroups.map((service) => <a id={service.slug} key={service.number} href={serviceHref[service.slug]}><span>{service.number}</span><small>{tr(`第 ${service.number} 条业务线`, `PATHWAY ${service.number}`)}</small><h3>{lang === 'zh' ? service.title.zh : service.title.en}</h3><p>{lang === 'zh' ? service.summary.zh : service.summary.en}</p><b>↗</b></a>)}
        </div>
      </section>

      <section className="case-feature-home">
        <div className="case-feature-image"><img src={assetPath('learning-room.jpg')} alt={tr('AEI 学习项目', 'AEI learning programme')} /><span>{tr('案例中心 / 01', 'CASE LIBRARY / 01')}</span></div>
        <div className="case-feature-copy"><p>02 / {tr('案例中心', 'CASE LIBRARY')}</p><h2>{tr('不只展示结果，\n更解释路径。', 'Beyond outcomes:\nwe explain the pathway.')}</h2><p>{tr('案例以匿名方式呈现背景、难点、策略与结果。服务项目量级、结果记录与个案证据分别说明，让经验可理解、口径可核验。', 'Cases present profile, challenge, strategy and outcome in anonymised form. Project volume, outcome records and case evidence are reported separately, keeping both the experience and its basis clear.')}</p><div className="case-mini-list">{detailedCases.slice(0, 3).map((item) => <div key={item.id}><span>{item.year}</span><strong>{lang === 'zh' ? item.title.zh : item.title.en}</strong><small>{lang === 'zh' ? item.categoryLabel.zh : item.categoryLabel.en}</small></div>)}</div><a className="solid-cta orange" href="/cases/">{tr('进入案例数据库', 'Enter the case library')} <span>↗</span></a></div>
      </section>

      <section className="editorial-section data-section">
        <div className="editorial-heading"><p>03 / {tr('年度项目量级', 'ANNUAL PROJECT VOLUME')}</p><h2>{tr('以可核验样本为基础，\n呈现团队年度服务量级', 'A verified sample,\nscaled conservatively for the team')}</h2><p className="heading-note">{tr('图表以一名核心成员归档的 126 个项目文件夹为可核验样本，并按约 5 倍系数保守估算团队整体量级。数字均为约数，仅用于说明业务规模。', 'The chart uses 126 project folders archived by one core team member as a verifiable sample, then applies an approximate five-times multiplier to estimate team-wide volume conservatively. All figures are rounded indicators of scale.')}</p></div>
        <div className="year-chart">{applicationYears.map(({ year, count }) => <div key={year}><span>≈{count}</span><i style={{ height: `${Math.max(18, count * 1.2)}px` }} /><small>{year}</small></div>)}</div>
        <div className="period-totals"><div><strong>≈80</strong><span>2016—2019</span></div><div><strong>≈235</strong><span>2020—2022</span></div><div><strong>≈315</strong><span>2023—2026</span></div><div className="total"><strong>600+</strong><span>{tr('团队累计服务项目量级（保守估算）', 'TEAM PROJECT VOLUME · CONSERVATIVE ESTIMATE')}</span></div></div>
      </section>

      <section className="image-led-section">
        <img src={assetPath('scu-ntu-summer.jpg')} alt={tr('AEI 历史暑期学习项目', 'Past AEI summer learning programme')} />
        <div><p>04 / {tr('国际项目与院校合作', 'GLOBAL PROGRAMMES & PARTNERSHIPS')}</p><h2>{tr('从一次交流，走向长期合作。', 'From one exchange to enduring collaboration.')}</h2><p>{tr('AEI 将课程、校园体验、企业参访、研究互访与合作协调组织为清晰的执行方案；具体资源、日程与责任以双方正式确认的项目文件为准。', 'AEI turns learning, campus immersion, industry visits, research exchange and partnership coordination into clear delivery plans. Resources, schedules and responsibilities are governed by the project documents formally confirmed by all parties.')}</p><div><a href="/programmes/">{tr('国际项目', 'Programmes')} ↗</a><a href="/partnerships/">{tr('院校合作', 'Partnerships')} ↗</a></div></div>
      </section>
    </main>
  );
}
