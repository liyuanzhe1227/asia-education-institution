'use client';

import { useLanguage } from '../components/LanguageProvider';

const destinations = [
  {
    code: 'SG', zh: '新加坡', en: 'Singapore',
    routesZh: '工作准证与家属路径、ONE Pass、永久居民、公民申请',
    routesEn: 'Work and dependant passes, ONE Pass, permanent residence and citizenship',
    noteZh: '由 MOM 与 ICA 分别管理。PR 与公民身份是独立评估，不由工作准证自动产生。',
    noteEn: 'Administered separately by MOM and ICA. PR and citizenship are separately assessed and do not arise automatically from a work pass.',
    links: [
      ['https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass', 'ONE Pass · MOM'],
      ['https://www.ica.gov.sg/reside/PR/', 'Permanent Residence · ICA'],
      ['https://www.ica.gov.sg/reside/citizenship', 'Citizenship · ICA'],
    ],
  },
  {
    code: 'HK', zh: '中国香港', en: 'Hong Kong SAR',
    routesZh: '高端人才通行证、优秀人才入境、专业人士及永久居民路径',
    routesEn: 'Top Talent Pass, Quality Migrant Admission, professional and permanent-resident pathways',
    noteZh: '高才通和优才属于入境计划；通常居港满七年后，才可能依法申请香港永久性居民身份。',
    noteEn: 'TTPS and QMAS are admission schemes; eligibility for Hong Kong permanent-resident status may arise after seven years of ordinary residence under applicable law.',
    links: [
      ['https://www.immd.gov.hk/eng/services/visas/TTPS.html', 'Top Talent Pass · ImmD'],
      ['https://www.immd.gov.hk/eng/services/visas/quality_migrant_admission_scheme.html', 'QMAS · ImmD'],
    ],
  },
  {
    code: 'CN', zh: '中国大陆', en: 'Mainland China',
    routesZh: '国内人才项目、回国发展、外国人来华工作与居留、外国人永久居留',
    routesEn: 'Domestic talent programmes, returnee development, foreign work and residence, and permanent residence',
    noteZh: '国内人才项目按国家、省市、园区及用人单位分别评估；外国人来华工作、居留与永久居留依据主管机关现行规则办理。',
    noteEn: 'Domestic talent programmes are assessed at national, provincial, municipal, park and employer levels; foreign work, residence and permanent-residence matters follow current authority rules.',
    links: [
      ['https://s.nia.gov.cn/mps/bszy/wgrcrj/yjjl/201903/t20190313_1008.html', '永久居留服务指南 · 国家移民管理局', 'Permanent Residence Guide · NIA'],
      ['https://s.nia.gov.cn/mps/main-cn.html', '政务服务平台 · 国家移民管理局', 'Government Services · NIA'],
    ],
  },
  {
    code: 'UK', zh: '英国', en: 'United Kingdom',
    routesZh: 'Global Talent、Skilled Worker、永居与英国公民入籍',
    routesEn: 'Global Talent, Skilled Worker, indefinite leave to remain and British citizenship',
    noteZh: '不同签证的永居年限、连续居住与语言要求不同；公民申请是永居后的独立步骤。',
    noteEn: 'Settlement periods, continuous-residence and language requirements vary by route; citizenship is a separate post-settlement process.',
    links: [
      ['https://www.gov.uk/global-talent', 'Global Talent · GOV.UK'],
      ['https://www.gov.uk/indefinite-leave-to-remain-business-investor-global-talent', 'Settlement · GOV.UK'],
      ['https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain', 'Citizenship · GOV.UK'],
    ],
  },
  {
    code: 'CA', zh: '加拿大', en: 'Canada',
    routesZh: 'Express Entry、省提名、永久居民及加拿大公民申请',
    routesEn: 'Express Entry, Provincial Nominee Programs, permanent residence and Canadian citizenship',
    noteZh: '建立 Express Entry 档案不等于递交永居申请；只有获得邀请后才能按对应项目提交。',
    noteEn: 'Creating an Express Entry profile is not a permanent-residence application; submission follows an invitation under the relevant programme.',
    links: [
      ['https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html', 'Express Entry · IRCC'],
      ['https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html', 'Citizenship · IRCC'],
    ],
  },
  {
    code: 'AU', zh: '澳大利亚', en: 'Australia',
    routesZh: '技术移民、雇主担保、National Innovation Visa 与公民申请',
    routesEn: 'Skilled migration, employer sponsorship, the National Innovation Visa and citizenship',
    noteZh: 'National Innovation Visa（858）为邀请制永久签证；提交意向书不保证获邀。',
    noteEn: 'The National Innovation Visa (subclass 858) is an invitation-only permanent visa; an expression of interest does not guarantee an invitation.',
    links: [
      ['https://immi.homeaffairs.gov.au/visas/working-in-australia/visas-for-innovation/national-innovation-visa', 'National Innovation Visa · Home Affairs'],
      ['https://immi.homeaffairs.gov.au/citizenship/become-a-citizen', 'Citizenship · Home Affairs'],
    ],
  },
  {
    code: 'US', zh: '美国', en: 'United States',
    routesZh: 'O-1、EB-1、EB-2 NIW、EB-5、绿卡及入籍',
    routesEn: 'O-1, EB-1, EB-2 NIW, EB-5, lawful permanent residence and naturalisation',
    noteZh: '非移民签证、移民类别、调整身份与领事程序是不同路径；复杂案件应由美国持牌律师出具法律意见。',
    noteEn: 'Non-immigrant status, immigrant classifications, adjustment of status and consular processing are distinct; complex matters require advice from a licensed US attorney.',
    links: [
      ['https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1', 'EB-1 · USCIS'],
      ['https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2', 'EB-2 / NIW · USCIS'],
      ['https://www.uscis.gov/citizenship/apply-for-citizenship', 'Citizenship · USCIS'],
    ],
  },
  {
    code: 'NZ', zh: '新西兰', en: 'New Zealand',
    routesZh: '技术移民居民签证、永久居民签证与新西兰公民申请',
    routesEn: 'Skilled Migrant residence, permanent-resident and New Zealand citizenship pathways',
    noteZh: '居民签证、永久居民签证与公民身份并非同一概念，适用条件和居住要求需要分别核对。',
    noteEn: 'Resident visas, permanent-resident visas and citizenship are distinct statuses with separate eligibility and presence requirements.',
    links: [
      ['https://www.immigration.govt.nz/visas/skilled-migrant-category-resident-visa/', 'Skilled Migrant · Immigration NZ'],
      ['https://www.govt.nz/browse/passports-citizenship-and-identity/nz-citizenship/', 'Citizenship · New Zealand Government'],
    ],
  },
  {
    code: 'EU+', zh: '欧洲及其他国家', en: 'Europe & Other Jurisdictions',
    routesZh: '欧盟蓝卡、各国技术与人才路径、长期居留、投资或创业及入籍',
    routesEn: 'EU Blue Card, national skilled and talent routes, long-term residence, investment or entrepreneurship and citizenship',
    noteZh: '欧洲居留与公民规则由欧盟框架、成员国法律及个别国家制度共同构成；其他国家同样按主管机关最新规则逐案评估。',
    noteEn: 'European residence and citizenship reflect EU frameworks, national law and country-specific programmes; other jurisdictions are assessed case by case under current authority rules.',
    links: [
      ['https://immigration-portal.ec.europa.eu/index_en', 'EU Immigration Portal'],
      ['https://european-union.europa.eu/live-work-study/immigration-eu_en', 'Immigration to the EU'],
    ],
  },
];

export default function MobilityPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  return <main>
    <section className="mobility-hero"><p>{tr('07 / 全球流动与身份规划', '07 / GLOBAL MOBILITY & STATUS PLANNING')}</p><h1>{tr('签证、永居与\n人才身份规划', 'Visa, residence &\ntalent pathways')}</h1><div><strong>{tr('先比较路径，再准备证据；先确认资格，再进入申请。', 'Compare pathways before building evidence; confirm eligibility before applying.')}</strong><span>{tr('覆盖学习、工作、家庭、人才、永居与公民身份的初步路径分析。各国制度持续变化，页面仅作为服务导航，实际申请以主管机关最新规则及持牌专业意见为准。', 'Preliminary pathway analysis across study, work, family, talent, permanent residence and citizenship. Rules change frequently; this page is a service guide, and applications must follow current authority rules and licensed professional advice.')}</span><a href="/about/#consultation">{tr('预约身份路径初评', 'Request a pathway review')} ↗</a></div></section>

    <section className="mobility-scope" id="scope"><div><p>{tr('业务范围', 'SERVICE SCOPE')}</p><h2>{tr('从临时签证，\n到长期身份。', 'From temporary permission\nto long-term status.')}</h2></div><div>{[
      [tr('签证与准证', 'Visas & permits'), tr('学习、工作、家属、创业与短期活动路径比较。', 'Compare study, work, dependant, founder and short-term activity routes.')],
      [tr('永居规划', 'Permanent residence'), tr('评估居留历史、职业、家庭、贡献与材料准备节点。', 'Assess residence history, career, family, contribution and evidence milestones.')],
      [tr('人才项目', 'Talent programmes'), tr('围绕研究、技术、商业、艺术、体育与创新成果建立证据地图。', 'Map evidence across research, technology, business, arts, sport and innovation.')],
      [tr('公民申请', 'Citizenship'), tr('区分入籍资格、居住要求、语言测试、宣誓与原国籍影响。', 'Distinguish eligibility, presence, language, oath and original-nationality implications.')],
      [tr('家庭与随行', 'Family & dependants'), tr('梳理配偶、子女、父母与家庭成员的关联路径。', 'Map related routes for spouses, children, parents and family members.')],
      [tr('材料与项目管理', 'Evidence & project management'), tr('建立文件清单、证据索引、翻译协调、时间表与版本记录。', 'Build checklists, evidence indexes, translation coordination, timelines and version records.')],
    ].map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="destination-section" id="destinations"><div className="destination-heading"><p>{tr('目的地索引', 'DESTINATION INDEX')}</p><h2>{tr('八个重点目的地，\n其他国家按个案扩展。', 'Eight priority destinations,\nwith case-by-case expansion elsewhere.')}</h2><span>{tr('以下仅列示常见路径方向，不构成资格判断或法律意见。中国大陆可评估国内人才项目、回国发展及外国人来华路径；欧洲及其他国家作为开放扩展入口。所有外部链接指向政府或主管机关。', 'These are common route directions, not an eligibility finding or legal opinion. Mainland China assessments cover domestic talent programmes, returnee development and foreign-national routes; Europe and other jurisdictions remain an open expansion entry. External links point to government or official authorities.')}</span></div><div className="destination-grid">{destinations.map((item) => <article key={item.code}><div><b>{item.code}</b><h3>{lang === 'zh' ? item.zh : item.en}</h3></div><strong>{lang === 'zh' ? item.routesZh : item.routesEn}</strong><p>{lang === 'zh' ? item.noteZh : item.noteEn}</p><div>{item.links.map(([href, labelZh, labelEn]) => <a key={href} href={href} target="_blank" rel="noreferrer">{lang === 'en' && labelEn ? labelEn : labelZh} ↗</a>)}</div></article>)}</div></section>

    <section className="talent-evidence" id="talent"><div><p>{tr('人才项目证据', 'TALENT-PROGRAMME EVIDENCE')}</p><h2>{tr('人才项目不是一份简历，\n而是一条可核验的影响力证据链。', 'A talent application is not a CV.\nIt is a verifiable impact case.')}</h2></div><ol>{[
      [tr('资格门槛', 'Route threshold'), tr('先核对身份、收入、学历、职业、成就、邀请或担保要求。', 'Check status, income, education, profession, achievement, invitation and sponsorship requirements.')],
      [tr('成果分层', 'Achievement map'), tr('区分奖项、论文、专利、收入、领导力、媒体、商业与公共影响。', 'Separate awards, publications, patents, income, leadership, media, business and public impact.')],
      [tr('第三方证明', 'Independent evidence'), tr('确认推荐人资格、机构地位、公开记录与证据时间。', 'Confirm referee standing, institutional status, public records and evidence dates.')],
      [tr('未来贡献', 'Future contribution'), tr('将既有成果与目的地行业、研究或公共价值建立真实联系。', 'Connect past achievements with credible future industry, research or public value.')],
      [tr('专业复核', 'Licensed review'), tr('涉及法律判断、代理资格或正式递交时，转交相应法域持牌人士。', 'Refer legal judgement, regulated representation and formal filing to licensed professionals in the jurisdiction.')],
    ].map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>

    <section className="mobility-boundary" id="citizenship"><div><p>{tr('服务边界', 'SERVICE BOUNDARIES')}</p><h2>{tr('把路径分析、材料准备与专业责任说清楚。', 'Clear roles for pathway analysis, evidence preparation and regulated advice.')}</h2></div><div><article><h3>{tr('AEI 可以提供', 'AEI can provide')}</h3><ul><li>{tr('初步路径比较与目标梳理', 'Preliminary pathway comparison and goal clarification')}</li><li>{tr('材料清单、证据地图与项目时间表', 'Document checklist, evidence map and project timeline')}</li><li>{tr('履历、研究、职业与成果材料的事实整理', 'Factual organisation of career, research and achievement evidence')}</li><li>{tr('翻译、公证及持牌专业人士的协调', 'Coordination with translators, notaries and licensed professionals')}</li></ul></article><article><h3>{tr('由主管机关或持牌专业人士决定', 'Reserved for authorities and licensed professionals')}</h3><ul><li>{tr('签证、永居、公民身份或人才项目的最终审批由主管机关决定', 'Final decisions on visas, permanent residence, citizenship and talent programmes rest with the relevant authority')}</li><li>{tr('AEI 不替代政府机关作出资格判断', 'AEI does not substitute for an authority’s eligibility decision')}</li><li>{tr('需要法律意见或持牌代理的事项，由相应法域的合资格专业人士处理', 'Legal advice and regulated representation are handled by appropriately qualified professionals in the relevant jurisdiction')}</li><li>{tr('申请人须完整披露拒签、犯罪、健康、资金与身份历史', 'Applicants must fully disclose refusal, criminal, health, financial and immigration history')}</li></ul></article></div></section>

    <section className="page-cta"><p>{tr('国家、身份和时间都还不确定？', 'Unsure about destination, status or timing?')}</p><h2>{tr('先做一份跨国家路径比较。', 'Start with a cross-country pathway comparison.')}</h2><a href="/about/#consultation">{tr('提交初步信息', 'Submit preliminary information')} ↗</a></section>
  </main>;
}
