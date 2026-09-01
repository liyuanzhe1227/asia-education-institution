'use client';

import { useLanguage } from '../components/LanguageProvider';

export default function ChinaPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const stages = [
    [tr('幼儿园与学前', 'Kindergarten & Early Years'), tr('双语环境适应、学校类型比较、入学时间、家庭迁移与家校沟通准备。', 'Bilingual adjustment, school-type comparison, entry timing, family relocation and parent–school preparation.')],
    [tr('小学阶段', 'Primary School'), tr('阅读、数学、科学、英语表达、机器人与项目式学习，建立兴趣与学习习惯。', 'Reading, mathematics, science, English communication, robotics and project-based learning to build interests and habits.')],
    [tr('初中阶段', 'Lower Secondary'), tr('国际课程转轨、选科基础、奥林匹克数学、科技竞赛与长期活动记录。', 'International-curriculum transition, subject foundations, Olympiad mathematics, STEM competitions and sustained activity records.')],
    [tr('高中阶段', 'Upper Secondary'), tr('IGCSE、A-Level、IB、AP 与国内课程比较，衔接专业探索和本科申请。', 'Comparing IGCSE, A-Level, IB, AP and Chinese curricula, linked to subject exploration and undergraduate applications.')],
    [tr('本科与交换', 'University & Exchange'), tr('本科申请、转学、交换、科研项目、实习、论文与研究生准备。', 'Undergraduate entry, transfer, exchange, research, internships, papers and postgraduate preparation.')],
    [tr('硕士与博士', 'Master’s & Doctoral'), tr('院校与专业组合、研究定位、材料、推荐、面试、奖学金与递交管理。', 'University and programme portfolios, research positioning, materials, references, interviews, scholarships and submission management.')],
    [tr('家庭与全球流动', 'Family & Global Mobility'), tr('将教育时间线与签证、家属安排、职业和长期身份路径进行协调。', 'Coordinating education timelines with visas, dependants, careers and longer-term status pathways.')],
  ];
  const projects = [
    [tr('机器人与工程比赛', 'Robotics & Engineering Competitions'), tr('规则核对、组队分工、原型、工程日志、测试、海报与答辩训练。', 'Rules review, team roles, prototype, engineering log, testing, poster and judging preparation.')],
    [tr('奥林匹克数学', 'Olympiad Mathematics'), tr('能力诊断、模块训练、英文数学表达、阶段测评与适龄赛事选择。', 'Diagnostics, topic-based training, mathematical English, staged assessment and age-appropriate event selection.')],
    [tr('科学研究与创新', 'Research & Innovation'), tr('研究问题、实验或调查设计、数据记录、成果展示与知识产权意识。', 'Research questions, experimental or survey design, data records, presentation and intellectual-property awareness.')],
    [tr('论文与学术表达', 'Papers & Academic Communication'), tr('文献地图、方法核查、图表与论证、投稿渠道筛选和审稿回应准备。', 'Literature mapping, methods review, figures and argument, outlet selection and response preparation.')],
    [tr('专著与出版项目', 'Monographs & Publishing Projects'), tr('主题边界、目录、样章、版权清单、出版提案与项目时间表。', 'Scope, contents, sample chapter, rights checklist, publishing proposal and project timeline.')],
    [tr('国际课堂与访学', 'Global Classrooms & Study Visits'), tr('围绕人工智能、科学技术工程与数学、可持续发展和城市学习设计短期项目。', 'Short programmes in AI, STEM, sustainability and urban learning.')],
  ];
  return <main>
    <section className="china-hero"><p>{tr('中国家庭服务 / 新加坡注册 / 全球资源协作', 'CHINA FAMILY SERVICES / SINGAPORE-REGISTERED / GLOBAL DELIVERY')}</p><h1>{tr('中国家庭服务 ×\n全球教育资源', 'China family services ×\nglobal education resources')}</h1><div><strong>{tr('家长看得懂，学生走得稳，跨国团队把路径执行清楚。', 'Clear for parents, workable for students, coordinated across borders.')}</strong><span>{tr('AEI 是新加坡注册的跨国教育服务平台，面向中国家庭提供中文沟通、全龄教育规划和国际项目协调。服务从幼儿园、小学、初高中延伸至大学、硕博、科研、竞赛与全球流动。', 'AEI is a Singapore-registered cross-border education platform serving China-based families through Chinese-language communication, all-stage planning and international programme coordination—from early years and school to university, research, competitions and global mobility.')}</span><div><a href="/about/#consultation">{tr('预约中国家庭初评', 'Request a family pathway review')} ↗</a><a href="/cases/#illustrative">{tr('查看典型情境', 'View illustrative scenarios')} →</a></div></div></section>

    <section className="china-trust"><div><strong>{tr('中国时区', 'CHINA TIME ZONE')}</strong><span>{tr('中文沟通与家庭会议', 'Chinese-language family communication')}</span></div><div><strong>{tr('新加坡主体', 'SINGAPORE ENTITY')}</strong><span>UEN 201510068D</span></div><div><strong>{tr('全龄路径', 'ALL EDUCATION STAGES')}</strong><span>{tr('幼儿园至硕博与职业发展', 'Early years to postgraduate and career')}</span></div><div><strong>{tr('跨国协作', 'CROSS-BORDER DELIVERY')}</strong><span>{tr('学校、导师、机构与持牌专业人士', 'Schools, mentors, institutions and licensed professionals')}</span></div></section>

    <section className="china-stages" id="stages"><div className="china-section-heading"><p>{tr('全龄教育路径', 'ALL-STAGE EDUCATION PATHWAYS')}</p><h2>{tr('不是只做硕博申请，\n而是陪伴完整成长阶段。', 'More than postgraduate admissions—\na connected pathway across every stage.')}</h2><span>{tr('每个阶段先确认学生能力、家庭目标、课程体系、时间与预算，再确定学校、活动和项目组合。', 'At every stage, capability, family goals, curriculum, timing and budget are clarified before schools, activities and projects are selected.')}</span></div><div>{stages.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="china-projects" id="competitions"><div className="china-section-heading"><p>{tr('成长与成果项目', 'DEVELOPMENT & OUTCOME PROJECTS')}</p><h2>{tr('让兴趣、能力与成果\n形成连续证据。', 'Turn interests, capability and outputs\ninto a coherent record.')}</h2><span>{tr('AEI 负责目标、路径、导师与项目管理；学生必须真实参与，竞赛、录取与出版结果由相应主办方、学校、期刊或出版社决定。', 'AEI supports objectives, pathway, mentor coordination and project management. Students must participate authentically; competition, admission and publication decisions remain with organisers, schools, journals and publishers.')}</span></div><div>{projects.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="cross-border-model" id="cross-border"><div><p>{tr('跨国服务机制', 'CROSS-BORDER SERVICE MODEL')}</p><h2>{tr('中国家庭入口，\n新加坡项目管理，\n全球资源协作。', 'China-family access,\nSingapore project governance,\nglobal resource coordination.')}</h2></div><ol>{[
      [tr('家庭与学生诊断', 'Family & Student Diagnosis'), tr('中文沟通目标、现实约束、课程基础、时间和家庭分工。', 'Clarify goals, constraints, curriculum base, timing and family roles in Chinese.')],
      [tr('跨国路径设计', 'Cross-border Pathway Design'), tr('比较学校、课程、项目、目的地与身份要求，形成主路径和备选方案。', 'Compare schools, curricula, programmes, destinations and status requirements to create primary and contingency routes.')],
      [tr('专业资源匹配', 'Specialist Matching'), tr('按项目协调导师、学校、机构、翻译、公证或持牌专业人士。', 'Coordinate mentors, schools, institutions, translators, notaries or licensed professionals as required.')],
      [tr('进度与质量管理', 'Progress & Quality Management'), tr('以节点、版本、家庭会议和复盘记录推动执行，不用口头承诺替代交付。', 'Drive delivery through milestones, version control, family meetings and review records rather than verbal promises.')],
    ].map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>

    <section className="page-cta"><p>{tr('孩子现在处于哪个阶段？', 'Where is the student now?')}</p><h2>{tr('先做一份家庭教育路径图。', 'Start with a family education pathway map.')}</h2><a href="/about/#consultation">{tr('提交初步信息', 'Submit preliminary information')} ↗</a></section>
  </main>;
}
