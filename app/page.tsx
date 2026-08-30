'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';

type Lang = 'zh' | 'en';

const content = {
  zh: {
    nav: ['业务体系', '服务对象', '项目经验', '关于 AEI'],
    contact: '联系 AEI',
    heroKicker: '新加坡 · 创立于 2015 年',
    heroTitle: <>连接教育、研究<br />与全球机会</>,
    heroEn: 'Education, research and opportunity — connected across borders.',
    heroDeck: '为学生、学者、院校与机构提供从个人成长到国际合作的一体化教育解决方案。',
    explore: '探索业务体系',
    discuss: '讨论合作',
    proof: [['2015', '创立于新加坡'], ['06', '清晰业务线'], ['CN · EN', '双语全程协同']],
    servicesKicker: '一个平台 · 六条业务路径',
    servicesTitle: '把分散需求，组织成可执行的成长路径',
    servicesIntro: '从个人升学到院校合作，每条业务线都有清晰边界，也能按实际目标组合为一体化项目。',
    services: [
      ['01', '升学与申请', 'Admissions & Pathways', '硕士、博士与跨专业路径规划；覆盖目标梳理、选校策略、材料准备与面试支持。', ['研究生与博士申请', '升学与转专业规划', '材料与面试准备']],
      ['02', '学术与研究', 'Academic & Research', '围绕研究问题、方法、表达与成果传播，培养可持续的独立研究能力。', ['研究计划与方法辅导', '论文表达与发表路径', '创新项目与知识产权']],
      ['03', '国际项目', 'Global Programmes', '设计 7–14 天短期学习、访学与营训，连接课堂、校园、企业与城市体验。', ['可持续发展与 STEM', '机器人、AI 与创新', '大学与企业参访']],
      ['04', '院校合作', 'Institutional Partnerships', '支持院校建立可落地的学生流动、联合培养、科研交流与长期合作机制。', ['暑校与交换项目', '课题组与教师交流', 'MoU 与项目协调']],
      ['05', '职业与人才', 'Career & Talent', '从学习成果走向职业发展，提供定位、简历、面试与跨境发展规划支持。', ['职业方向与能力盘点', '简历与面试训练', '学习—职业衔接']],
      ['06', '机构培训', 'Executive Learning', '为企业、政府与专业团队定制新加坡主题研修与能力提升项目。', ['城市与公共治理', '安全、环境与健康', '工程生产力与领导力']],
    ],
    audiencesKicker: '按角色设计，而非套用模板',
    audiencesTitle: '服务不同起点，也对齐同一个结果',
    audiences: [
      ['学生与家庭', '明确方向、降低信息差、建立长期能力，而不是只完成一次申请。', '个人成长路径'],
      ['学者与专业人士', '连接研究、表达、职业与国际流动，形成可验证的阶段成果。', '研究与职业路径'],
      ['院校与机构', '从合作构想到项目执行，协调课程、资源、伙伴与复盘机制。', '合作项目路径'],
    ],
    processKicker: 'AEI 方法',
    processTitle: '从目标开始，以交付闭环',
    process: [['01', '诊断', '澄清目标、受众、约束与成功标准。'], ['02', '设计', '形成路径、范围、里程碑与责任分工。'], ['03', '协同', '连接导师、院校与合作资源，推进执行。'], ['04', '复盘', '检视成果、沉淀材料并规划下一阶段。']],
    experienceKicker: '精选过往项目经验',
    experienceTitle: '跨越课堂、校园与机构边界',
    experienceNote: '以下为 AEI 过往项目经验展示，不代表院校当前授权、隶属或持续合作关系。',
    experiences: [
      ['2019', '四川大学 × 南洋理工大学', '新加坡暑期访学项目', '围绕材料科学、校园学习与国际交流组织的短期项目。'],
      ['2019', '同济大学 × 南洋理工大学', '研究生国际学术论坛', '支持环境与材料领域代表团交流及学术活动协调。'],
      ['2020', '英国剑桥主题师资', '暑期线上学习项目', '围绕创新、教育与语言能力开展三周线上学习。'],
    ],
    aboutKicker: '关于 Asia Education Institution',
    aboutTitle: '立足新加坡，做长期主义的教育连接者',
    aboutBody: 'Asia Education Institution（AEI）于 2015 年在新加坡成立。我们以双语沟通、跨文化理解和项目化执行，把个人发展、学术成长与机构合作连接起来。',
    principles: [['清晰', '先定义目标与边界，再设计服务。'], ['可信', '不承诺录取或结果，以真实材料和过程质量为基础。'], ['协同', '所有院校与机构安排均以正式确认为准。']],
    contactKicker: '开始一段有目标的对话',
    contactTitle: '告诉我们，你想把哪条路径走得更清楚。',
    call: '致电咨询',
    phone: '+65 8576 8098',
    location: '新加坡 · 预约沟通',
    footer: 'Asia Education Institution · Singapore',
    disclaimer: '所有项目与合作安排须经评估及相关机构确认；AEI 不承诺录取、签证、就业或发表结果。',
  },
  en: {
    nav: ['Pathways', 'Who We Serve', 'Experience', 'About AEI'],
    contact: 'Contact AEI',
    heroKicker: 'SINGAPORE · ESTABLISHED 2015',
    heroTitle: <>Connecting education,<br />research and opportunity</>,
    heroEn: '跨越地域，连接教育、研究与成长机会。',
    heroDeck: 'Integrated education solutions for students, scholars, universities and organisations — from individual development to institutional collaboration.',
    explore: 'Explore our pathways',
    discuss: 'Discuss a collaboration',
    proof: [['2015', 'Established in Singapore'], ['06', 'Connected pathways'], ['CN · EN', 'Bilingual coordination']],
    servicesKicker: 'ONE PLATFORM · SIX PATHWAYS',
    servicesTitle: 'Turning fragmented needs into actionable pathways',
    servicesIntro: 'Each pathway has a clear scope and can stand alone or combine into an integrated programme shaped around the intended outcome.',
    services: [
      ['01', 'Admissions & Pathways', '升学与申请', 'Master’s, doctoral and cross-disciplinary planning from goal definition and school strategy to materials and interviews.', ['Postgraduate applications', 'Pathway and discipline planning', 'Materials and interviews']],
      ['02', 'Academic & Research', '学术与研究', 'Developing independent research capability through better questions, methods, communication and responsible dissemination.', ['Research design and methods', 'Academic communication', 'Innovation and IP pathways']],
      ['03', 'Global Programmes', '国际项目', 'Custom 7–14 day programmes connecting academic learning with campuses, companies and the city of Singapore.', ['Sustainability and STEM', 'Robotics, AI and innovation', 'University and industry visits']],
      ['04', 'Institutional Partnerships', '院校合作', 'Practical frameworks for mobility, joint learning, research exchange and durable institution-to-institution collaboration.', ['Summer and exchange programmes', 'Faculty and research mobility', 'MoU and programme coordination']],
      ['05', 'Career & Talent', '职业与人才', 'Turning learning into professional direction through positioning, CVs, interviews and cross-border development planning.', ['Career and capability mapping', 'CV and interview coaching', 'Study-to-career transitions']],
      ['06', 'Executive Learning', '机构培训', 'Singapore-based study visits and capability programmes for companies, public bodies and professional teams.', ['Urban and public governance', 'Safety, environment and health', 'Productivity and leadership']],
    ],
    audiencesKicker: 'DESIGNED BY ROLE, NOT BY TEMPLATE',
    audiencesTitle: 'Different starting points. One focus on outcomes.',
    audiences: [
      ['Students & families', 'Clarify direction, reduce information gaps and build capability beyond a single application.', 'Personal pathway'],
      ['Scholars & professionals', 'Connect research, communication, career development and international mobility.', 'Research and career pathway'],
      ['Universities & organisations', 'Move from collaboration intent to delivery across curriculum, resources and partners.', 'Partnership pathway'],
    ],
    processKicker: 'THE AEI METHOD',
    processTitle: 'Start with the goal. Close the loop.',
    process: [['01', 'Discover', 'Clarify the goal, audience, constraints and success criteria.'], ['02', 'Design', 'Define the pathway, scope, milestones and responsibilities.'], ['03', 'Deliver', 'Coordinate mentors, institutions and resources through execution.'], ['04', 'Review', 'Evaluate outcomes, capture evidence and frame the next stage.']],
    experienceKicker: 'SELECTED PAST EXPERIENCE',
    experienceTitle: 'Across classrooms, campuses and institutions',
    experienceNote: 'Past programme experience is shown for context and does not imply current endorsement, affiliation or an ongoing partnership.',
    experiences: [
      ['2019', 'Sichuan University × NTU', 'Singapore summer learning programme', 'A short programme spanning materials science, campus learning and international exchange.'],
      ['2019', 'Tongji University × NTU', 'Postgraduate academic forum', 'Coordination support for a delegation and academic exchange in environment and materials.'],
      ['2020', 'Cambridge-based faculty themes', 'Online summer learning programme', 'A three-week online experience across innovation, education and language development.'],
    ],
    aboutKicker: 'ABOUT ASIA EDUCATION INSTITUTION',
    aboutTitle: 'Singapore-based. Built for long-term educational connection.',
    aboutBody: 'Asia Education Institution (AEI) was established in Singapore in 2015. Through bilingual communication, cross-cultural understanding and disciplined delivery, we connect individual development, academic growth and institutional collaboration.',
    principles: [['Clarity', 'Define the goal and boundaries before designing the service.'], ['Integrity', 'No guaranteed outcomes; we work from authentic evidence and process quality.'], ['Coordination', 'Institutional arrangements remain subject to formal confirmation.']],
    contactKicker: 'START A PURPOSEFUL CONVERSATION',
    contactTitle: 'Tell us which pathway you want to make clearer.',
    call: 'Call AEI',
    phone: '+65 8576 8098',
    location: 'Singapore · By appointment',
    footer: 'Asia Education Institution · Singapore',
    disclaimer: 'All programmes and collaborations are subject to assessment and relevant institutional confirmation. AEI does not guarantee admission, visa, employment or publication outcomes.',
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const t = content[lang];
  const toggleLanguage = () => setLang(lang === 'zh' ? 'en' : 'zh');

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Asia Education Institution home">
          <img src="/aei-mark.jpg" alt="Asia Education Institution" />
          <span><strong>AEI</strong><small>Asia Education Institution</small></span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => <a key={item} href={['#pathways', '#audiences', '#experience', '#about'][index]}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language" type="button" onClick={toggleLanguage} aria-label={lang === 'zh' ? 'Switch to English' : '切换至中文'}>{lang === 'zh' ? 'EN' : '中文'}</button>
          <a className="header-contact" href="#contact">{t.contact} <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-en">{t.heroEn}</p>
          <p className="hero-deck">{t.heroDeck}</p>
          <div className="hero-actions">
            <a className="button primary" href="#pathways">{t.explore} <span>↗</span></a>
            <a className="button text" href="#contact">{t.discuss} <span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="AEI cross-border education platform">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core"><span>AEI</span><small>SG</small></div>
          <p>{lang === 'zh' ? '学习路径' : 'Learning'}<br /><em>{lang === 'zh' ? 'Learning pathways' : '学习路径'}</em></p>
          <p>{lang === 'zh' ? '国际协作' : 'Collaboration'}<br /><em>{lang === 'zh' ? 'Global collaboration' : '国际协作'}</em></p>
          <p>{lang === 'zh' ? '研究成长' : 'Research'}<br /><em>{lang === 'zh' ? 'Research development' : '研究成长'}</em></p>
        </div>
      </section>

      <section className="proof-strip" aria-label="AEI at a glance">
        {t.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="pathways section-pad" id="pathways">
        <div className="section-heading">
          <div><p className="eyebrow">{t.servicesKicker}</p><h2>{t.servicesTitle}</h2></div>
          <p>{t.servicesIntro}</p>
        </div>
        <div className="service-list">
          {t.services.map(([number, title, alt, description, items]) => (
            <article className="service-card" key={number as string}>
              <span className="service-number">{number as string}</span>
              <div className="service-title"><h3>{title as string}</h3><p>{alt as string}</p></div>
              <p className="service-description">{description as string}</p>
              <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="audiences section-pad" id="audiences">
        <div className="section-heading light">
          <div><p className="eyebrow">{t.audiencesKicker}</p><h2>{t.audiencesTitle}</h2></div>
        </div>
        <div className="audience-grid">
          {t.audiences.map(([title, body, tag], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><small>{tag} ↗</small></article>
          ))}
        </div>
      </section>

      <section className="process section-pad">
        <div className="process-intro"><p className="eyebrow">{t.processKicker}</p><h2>{t.processTitle}</h2></div>
        <div className="process-steps">
          {t.process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow">{t.experienceKicker}</p><h2>{t.experienceTitle}</h2></div>
          <p>{t.experienceNote}</p>
        </div>
        <div className="experience-grid">
          {t.experiences.map(([year, partner, title, body], index) => (
            <article className={index === 0 ? 'featured' : ''} key={title}>
              <img src={['/scu-ntu-summer.jpg', '/learning-room.jpg', '/campus-group.jpg'][index]} alt="" />
              <div><span>{year}</span><small>{partner}</small><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-copy"><p className="eyebrow">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p></div>
        <div className="principles">
          {t.principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="eyebrow">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-row">
          <a className="contact-button" href={`tel:${t.phone.replace(/\s/g, '')}`}><span>{t.call}</span><strong>{t.phone}</strong></a>
          <p>{t.location}</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/aei-mark.jpg" alt="" /><strong>AEI</strong></div>
        <p>{t.disclaimer}</p>
        <small>© {new Date().getFullYear()} {t.footer}</small>
      </footer>
    </main>
  );
}
