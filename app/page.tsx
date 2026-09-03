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
        <div className="lux-hero-media" aria-hidden="true">
          <img className="hero-art-base" src={assetPath('art/aei-aspirations-hero.jpg')} alt="" />
          <img className="hero-art-layer hero-art-layer-a" src={assetPath('art/aei-aspirations-hero.jpg')} alt="" />
          <img className="hero-art-layer hero-art-layer-b" src={assetPath('art/aei-aspirations-hero.jpg')} alt="" />
          <div className="hero-art-wash" />
        </div>
        <div className="hero-index">{tr('新加坡注册 · 中国家庭服务 · 全球资源协作', 'SINGAPORE-REGISTERED · CHINA FAMILY SERVICES · GLOBAL DELIVERY')}</div>
        <div className="lux-hero-copy">
          <p className="lux-kicker">{tr('新加坡 · 教育与国际合作', 'SINGAPORE · EDUCATION & GLOBAL CONNECTION')}</p>
          <h1>{tr('方向更清晰，\n成长更有力量。', 'Clarity in direction.\nAmbition in motion.')}</h1>
          <p>{tr('面向中国家庭、学生、研究者、院校与机构，AEI 将幼儿园至硕博升学、竞赛科研、国际项目与全球发展资源，组织为清晰、可执行并可持续推进的长期路径。', 'For China-based families, students, researchers and institutions, AEI turns education from early years to postgraduate study, competitions, research, global programmes and mobility into clear, executable and sustainable pathways.')}</p>
          <div className="lux-hero-actions"><a className="solid-cta" href="/china/">{tr('中国家庭服务', 'China family services')}<span>↗</span></a><a className="line-cta" href="/services/">{tr('查看全部服务', 'Explore all services')}<span>→</span></a></div>
        </div>
        <div className="hero-scroll">{tr('向下浏览', 'SCROLL')} <span>↓</span></div>
      </section>

      <section className="archive-band">
        <div><small>{tr('档案范围', 'ARCHIVE RANGE')}</small><strong>2016—2026</strong></div>
        {caseMetrics.slice(0, 3).map((metric) => <div key={metric.value + metric.zh}><strong>{metric.value}</strong><span>{lang === 'zh' ? metric.zh : metric.en}</span></div>)}
      </section>

      <section className="china-home-entry">
        <div><p>00 / {tr('中国家庭与全龄教育', 'CHINA FAMILY & ALL-STAGE EDUCATION')}</p><h2>{tr('从幼儿园到硕博，\n从兴趣项目到全球发展。', 'From early years to postgraduate study,\nfrom interests to global development.')}</h2></div>
        <div><p>{tr('家长需要的不是一堆国家、学校和奖项名称，而是一张能执行的家庭路径图。AEI 以中国时区中文沟通为入口，由新加坡注册主体管理跨国项目，并按需要协调学校、导师、机构和持牌专业人士。', 'Families need an executable pathway map, not a list of countries, schools and awards. AEI provides Chinese-language communication in the China time zone, with cross-border delivery governed by its Singapore-registered entity and coordinated with schools, mentors, institutions and licensed professionals as needed.')}</p><div><a href="/china/#stages">{tr('查看全龄教育路径', 'Explore all-stage pathways')} ↗</a><a href="/cases/#illustrative">{tr('查看低龄与项目示例', 'View school-age and project scenarios')} →</a></div></div>
      </section>

      <section className="editorial-section home-services">
        <div className="editorial-heading"><p>01 / {tr('业务体系', 'PATHWAYS')}</p><h2>{tr('七条业务线，\n覆盖全龄成长与跨国发展', 'Seven pathways.\nAll-stage growth and global development.')}</h2><a href="/services/">{tr('查看服务架构', 'Explore the service architecture')} →</a></div>
        <div className="service-mosaic">
          {serviceGroups.map((service) => <a id={service.slug} key={service.number} href={serviceHref[service.slug]}><span>{service.number}</span><small>{tr(`第 ${service.number} 条业务线`, `PATHWAY ${service.number}`)}</small><h3>{lang === 'zh' ? service.title.zh : service.title.en}</h3><p>{lang === 'zh' ? service.summary.zh : service.summary.en}</p><b>↗</b></a>)}
        </div>
      </section>

      <section className="case-feature-home">
        <div className="case-feature-image"><img src={assetPath('learning-room.jpg')} alt={tr('AEI 学习项目', 'AEI learning programme')} /><span>{tr('案例中心 / 01', 'CASE LIBRARY / 01')}</span></div>
        <div className="case-feature-copy"><p>02 / {tr('案例中心', 'CASE LIBRARY')}</p><h2>{tr('不只展示结果，\n更解释路径。', 'Beyond outcomes:\nwe explain the pathway.')}</h2><p>{tr('历史档案以匿名方式说明背景、难点、策略与结果；综合示例则清楚标注为非真实客户情境，用来解释幼儿园至硕博、竞赛、科研与出版项目可以如何设计。', 'Historical archives explain profile, challenge, strategy and outcome anonymously. Clearly labelled composite scenarios show how early-years, school, postgraduate, competition, research and publishing projects may be designed without representing real clients.')}</p><div className="case-mini-list">{detailedCases.slice(0, 3).map((item) => <div key={item.id}><span>{item.year}</span><strong>{lang === 'zh' ? item.title.zh : item.title.en}</strong><small>{lang === 'zh' ? item.categoryLabel.zh : item.categoryLabel.en}</small></div>)}</div><a className="solid-cta orange" href="/cases/">{tr('进入案例与情境库', 'Enter the case and scenario library')} <span>↗</span></a></div>
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
