'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useLanguage } from './components/LanguageProvider';
import { applicationYears, assetPath, caseMetrics, detailedCases, serviceGroups } from './lib/site-data';

export default function Home() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;

  return (
    <main>
      <section className="lux-hero">
        <div className="hero-index">AEI / 2015—2026</div>
        <div className="lux-hero-copy">
          <p className="lux-kicker">{tr('新加坡 · 教育与国际合作', 'SINGAPORE · EDUCATION & GLOBAL CONNECTION')}</p>
          <h1>{tr('让每一种成长，\n都有清晰路径。', 'A clearer pathway\nfor every ambition.')}</h1>
          <p>{tr('从升学申请、学术研究到国际项目与院校合作，AEI 将复杂选择整理为可执行、可复盘的长期路径。', 'From admissions and research to global programmes and institutional partnerships, AEI turns complex choices into structured, reviewable pathways.')}</p>
          <div className="lux-hero-actions"><Link className="solid-cta" href="/services/">{tr('进入服务中心', 'Explore services')}<span>↗</span></Link><Link className="line-cta" href="/cases/">{tr('查看匿名案例', 'View anonymised cases')}<span>→</span></Link></div>
        </div>
        <div className="lux-hero-art" aria-hidden="true">
          <div className="art-disc"><span>AEI</span><small>SINGAPORE</small></div>
          <div className="art-ring ring-a" /><div className="art-ring ring-b" />
          <p>EDUCATION<br />RESEARCH<br />OPPORTUNITY</p>
        </div>
        <div className="hero-scroll">SCROLL <span>↓</span></div>
      </section>

      <section className="archive-band">
        <div><small>{tr('档案范围', 'ARCHIVE RANGE')}</small><strong>2016—2026</strong></div>
        {caseMetrics.slice(0, 3).map((metric) => <div key={metric.value + metric.zh}><strong>{metric.value}</strong><span>{lang === 'zh' ? metric.zh : metric.en}</span></div>)}
      </section>

      <section className="editorial-section home-services">
        <div className="editorial-heading"><p>01 / {tr('业务体系', 'PATHWAYS')}</p><h2>{tr('六条业务线，\n一个完整成长系统', 'Six pathways.\nOne connected system.')}</h2><Link href="/services/">{tr('查看全部服务', 'Explore all services')} →</Link></div>
        <div className="service-mosaic">
          {serviceGroups.map((service) => <Link id={service.slug} key={service.number} href={`/services/#${service.slug}`}><span>{service.number}</span><small>{lang === 'zh' ? service.title.en : service.title.zh}</small><h3>{lang === 'zh' ? service.title.zh : service.title.en}</h3><p>{lang === 'zh' ? service.summary.zh : service.summary.en}</p><b>↗</b></Link>)}
        </div>
      </section>

      <section className="case-feature-home">
        <div className="case-feature-image"><img src={assetPath('learning-room.jpg')} alt="AEI learning programme" /><span>CASE LIBRARY / 01</span></div>
        <div className="case-feature-copy"><p>02 / {tr('案例中心', 'CASE LIBRARY')}</p><h2>{tr('不只展示结果，\n更解释路径。', 'Beyond outcomes:\nwe explain the pathway.')}</h2><p>{tr('案例采用匿名处理，拆解背景、核心挑战、策略选择与最终结果。所有数量均区分“服务档案”与“结果证据”，不以模糊成功率替代事实。', 'Cases are anonymised and structured around profile, challenge, strategy and outcome. Service records and outcome evidence are reported separately—never blurred into an unsupported success rate.')}</p><div className="case-mini-list">{detailedCases.slice(0, 3).map((item) => <div key={item.id}><span>{item.year}</span><strong>{lang === 'zh' ? item.title.zh : item.title.en}</strong><small>{lang === 'zh' ? item.categoryLabel.zh : item.categoryLabel.en}</small></div>)}</div><Link className="solid-cta orange" href="/cases/">{tr('进入案例数据库', 'Enter the case library')} <span>↗</span></Link></div>
      </section>

      <section className="editorial-section data-section">
        <div className="editorial-heading"><p>03 / {tr('申请与服务记录', 'APPLICATION RECORDS')}</p><h2>{tr('用年份呈现积累，\n不用口号代替数据', 'Evidence by year,\nnot claims by slogan.')}</h2><p className="heading-note">{tr('下列数字来自工作区按年度归档的申请与服务项目文件夹；它们代表服务档案量，并非全部为录取结果。', 'Figures come from annual application and service folders in the working archive. They represent service records, not a count of successful admissions.')}</p></div>
        <div className="year-chart">{applicationYears.map(({ year, count }) => <div key={year}><span>{count}</span><i style={{ height: `${Math.max(18, count * 6)}px` }} /><small>{year}</small></div>)}</div>
        <div className="period-totals"><div><strong>16</strong><span>2016—2019</span></div><div><strong>46</strong><span>2020—2022</span></div><div><strong>60</strong><span>2023—2026</span></div><div className="total"><strong>122</strong><span>{tr('档案合计', 'TOTAL RECORDS')}</span></div></div>
      </section>

      <section className="image-led-section">
        <img src={assetPath('scu-ntu-summer.jpg')} alt="Past AEI summer learning programme" />
        <div><p>04 / {tr('国际项目与院校合作', 'GLOBAL PROGRAMMES & PARTNERSHIPS')}</p><h2>{tr('从一次交流，走向长期合作。', 'From one exchange to enduring collaboration.')}</h2><p>{tr('短期营训、校园浸润、研究互访、联合培养与 MoU 协调，均以目标、资源、责任和正式确认为边界。', 'Short programmes, campus immersion, research exchange, joint pathways and MoU coordination—defined by objectives, resources, responsibilities and formal confirmation.')}</p><div><Link href="/programmes/">{tr('国际项目', 'Programmes')} ↗</Link><Link href="/partnerships/">{tr('院校合作', 'Partnerships')} ↗</Link></div></div>
      </section>
    </main>
  );
}
