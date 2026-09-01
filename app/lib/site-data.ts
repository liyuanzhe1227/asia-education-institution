export type Lang = 'zh' | 'en';
export type LocalText = { zh: string; en: string };
export const assetPath = (file: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/${file}`;

export const applicationYears = [
  { year: '2016', count: 10 }, { year: '2017', count: 15 },
  { year: '2018', count: 40 }, { year: '2019', count: 15 },
  { year: '2020', count: 30 }, { year: '2021', count: 95 },
  { year: '2022', count: 110 }, { year: '2023', count: 100 },
  { year: '2024', count: 105 }, { year: '2025', count: 60 },
  { year: '2026', count: 50 },
];

export const caseMetrics = [
  { value: '600+', zh: '团队累计服务项目量级（保守估算）', en: 'team project volume, conservatively estimated' },
  { value: '11', zh: '连续年度服务与项目记录', en: 'consecutive years of service records' },
  { value: '275+', zh: '历史结果记录量级（保守估算）', en: 'historical outcome-record volume, conservatively estimated' },
  { value: '20+', zh: '覆盖专业与项目方向', en: 'disciplines and programme types' },
];

export const yearInsights = [
  { year: '2016', count: 10, focus: { zh: '学业辅导与海外升学起步', en: 'Academic support and early overseas progression' }, analysis: { zh: '早期项目以单项学科辅导和院校申请为主，建立了从学习诊断到申请执行的基础流程。', en: 'Early work centred on subject support and university applications, establishing a basic process from learning diagnosis to application delivery.' } },
  { year: '2017', count: 15, focus: { zh: '硕博申请与材料重构', en: 'Postgraduate applications and narrative restructuring' }, analysis: { zh: '项目开始覆盖硕士与博士申请，重点处理学术指标、工作经历和研究潜力之间的证据关系。', en: 'Projects expanded into master’s and doctoral applications, focusing on the evidence relationship between academic indicators, work experience and research potential.' } },
  { year: '2018', count: 40, focus: { zh: '多路径申请与转学、实习需求', en: 'Multiple application, transfer and internship pathways' }, analysis: { zh: '项目类型明显丰富，除完整申请外，也出现转学、文书和实习等单项需求，服务模块更加清晰。', en: 'The portfolio broadened beyond full applications to transfer, writing and internship assignments, creating more clearly defined service modules.' } },
  { year: '2019', count: 15, focus: { zh: '个人申请与院校合作并行', en: 'Individual applications alongside institutional cooperation' }, analysis: { zh: '个人升学项目与校际交流项目并行，AEI 的角色从申请支持延伸至跨机构协调。', en: 'Individual progression projects ran alongside university exchange work, extending AEI’s role from application support to cross-institutional coordination.' } },
  { year: '2020', count: 30, focus: { zh: '综合申请与推荐材料支持', en: 'Integrated applications and referee documentation' }, analysis: { zh: '项目包括完整申请、专项材料与推荐文件支持，体现出材料协同和多节点管理能力。', en: 'Projects included full applications, specialist materials and referee documentation, demonstrating coordinated management across multiple submission components.' } },
  { year: '2021', count: 95, focus: { zh: '申请规模增长与服务类型扩展', en: 'Larger volume and broader service types' }, analysis: { zh: '除硕博申请外，年度项目还覆盖签证、交换与暑期项目，形成申请前后端相互衔接的服务结构。', en: 'In addition to postgraduate applications, projects covered visas, exchange and summer programmes, creating a more connected pre- and post-application structure.' } },
  { year: '2022', count: 110, focus: { zh: '博士、研究奖学金与交换项目', en: 'Doctoral, research-scholarship and exchange projects' }, analysis: { zh: '年度项目数量达到阶段高位，博士、研究奖学金和交换项目并行，体现更复杂的项目组合管理。', en: 'Project volume reached a period high, with doctoral, research-scholarship and exchange work requiring more complex portfolio management.' } },
  { year: '2023', count: 100, focus: { zh: '研究型申请、面试与专项材料', en: 'Research applications, interviews and specialist materials' }, analysis: { zh: '项目更加模块化，完整申请与研究计划、简历、面试等专项任务并存，适配不同阶段需求。', en: 'Delivery became more modular, combining full applications with research proposals, CVs and interview preparation for different stages of the applicant journey.' } },
  { year: '2024', count: 105, focus: { zh: '博士申请与复杂背景管理', en: 'Doctoral applications and complex-profile management' }, analysis: { zh: '博士和跨阶段项目占比提升，同时处理面试、学位证明、春季入学与进度调整等复杂节点。', en: 'Doctoral and cross-stage projects increased, alongside complex milestones such as interviews, degree evidence, spring intake and schedule adjustments.' } },
  { year: '2025', count: 60, focus: { zh: '个性化申请与项目闭环', en: 'Individualised applications and project completion' }, analysis: { zh: '项目以个性化申请管理为主，归档中同时保留已完成和关闭状态，便于追溯项目生命周期。', en: 'Projects primarily involved individual application management, with completed and closed statuses retained to preserve a traceable project lifecycle.' } },
  { year: '2026', count: 50, focus: { zh: '多专业申请持续推进', en: 'Ongoing applications across multiple disciplines' }, analysis: { zh: '当前年度项目覆盖不同专业方向，其中包含艺术类等更具专业差异的申请，部分仍在推进。', en: 'Current-year work spans multiple disciplines, including more specialised areas such as the arts; some projects remain in progress.' } },
];

export const serviceGroups = [
  {
    number: '01', slug: 'admissions',
    title: { zh: '升学与申请', en: 'Admissions & Pathways' },
    summary: { zh: '从幼儿园、小学、初高中到大学与硕博，按年龄、课程体系与家庭目标设计升学路径。', en: 'Education pathways from kindergarten and school years to university and postgraduate study, aligned with age, curriculum and family goals.' },
    items: [
      { zh: '低龄入学、转轨与国际课程规划', en: 'Early-years entry, school transition and international curricula' },
      { zh: '本科、硕士与博士分层申请', en: 'Tiered undergraduate, master’s and doctoral applications' },
      { zh: '家庭沟通、材料、面试与递交管理', en: 'Family alignment, materials, interviews and submission management' },
    ],
  },
  {
    number: '02', slug: 'research',
    title: { zh: '学术与研究发展', en: 'Academic & Research Development' },
    summary: { zh: '围绕研究问题、方法、学术表达与成果传播，培养独立研究能力。', en: 'Research questions, methods, academic communication and responsible dissemination for independent capability.' },
    items: [
      { zh: '研究计划与方法辅导', en: 'Research proposal and methods' },
      { zh: '论文表达与发表路径', en: 'Academic writing and publication pathway' },
      { zh: '创新项目与知识产权规划', en: 'Innovation and IP planning' },
    ],
  },
  {
    number: '03', slug: 'global',
    title: { zh: '国际学习项目', en: 'Global Learning Programmes' },
    summary: { zh: '连接课堂、校园、企业和城市的 7–20 天定制学习、访学与实习项目。', en: 'Custom 7–20 day learning, immersion and internship programmes across classrooms, campuses, companies and cities.' },
    items: [
      { zh: '可持续发展、科学技术工程与数学、人工智能', en: 'Sustainability, STEM and AI' },
      { zh: '大学与企业参访', en: 'University and industry immersion' },
      { zh: '短期实习与项目展示', en: 'Short internships and project showcases' },
    ],
  },
  {
    number: '04', slug: 'partnerships',
    title: { zh: '院校与科研合作', en: 'Institutional & Research Partnerships' },
    summary: { zh: '支持学生流动、课题组互访、联合培养与合作备忘录从构想到落地。', en: 'Supporting mobility, research-group exchange, joint pathways and MoUs from intent to delivery.' },
    items: [
      { zh: '暑校、交换与联合培养', en: 'Summer, exchange and joint pathways' },
      { zh: '教师与课题组交流', en: 'Faculty and research-group exchange' },
      { zh: '合作框架、协调与复盘', en: 'Framework, coordination and review' },
    ],
  },
  {
    number: '05', slug: 'career',
    title: { zh: '职业与人才发展', en: 'Career & Talent Development' },
    summary: { zh: '连接学业成果、职业定位、面试表达与跨境发展准备。', en: 'Connecting academic outcomes with career positioning, interview communication and cross-border readiness.' },
    items: [
      { zh: '能力盘点与职业定位', en: 'Capability mapping and positioning' },
      { zh: '简历、面试与职业表达', en: 'CV, interview and professional narrative' },
      { zh: '学习—职业衔接规划', en: 'Study-to-career transition planning' },
    ],
  },
  {
    number: '06', slug: 'executive',
    title: { zh: '机构培训与研修', en: 'Executive Learning' },
    summary: { zh: '为院校、企业与公共机构设计新加坡主题研修与能力提升项目。', en: 'Singapore-focused capability programmes for universities, companies and public organisations.' },
    items: [
      { zh: '城市治理与公共管理', en: 'Urban governance and public management' },
      { zh: '安全、环境、健康与消防', en: 'Safety, environment, health and fire' },
      { zh: '工程生产力、创新与领导力', en: 'Productivity, innovation and leadership' },
    ],
  },
  {
    number: '07', slug: 'mobility',
    title: { zh: '全球流动与身份规划', en: 'Global Mobility & Status Planning' },
    summary: { zh: '围绕签证、永居、公民身份与全球人才项目，比较国家路径并组织可核验材料。', en: 'Comparing country pathways and organising verifiable evidence for visas, permanent residence, citizenship and global talent programmes.' },
    items: [
      { zh: '多国家路径初步比较', en: 'Preliminary multi-country pathway comparison' },
      { zh: '人才、永居与公民申请证据规划', en: 'Evidence planning for talent, residence and citizenship' },
      { zh: '持牌律师与注册代理协同', en: 'Coordination with licensed counsel and registered advisers' },
    ],
  },
];

export type DetailedCase = {
  id: string;
  year: string;
  category: 'master' | 'phd' | 'complex' | 'cross';
  categoryLabel: LocalText;
  title: LocalText;
  discipline: LocalText;
  level: LocalText;
  timeline: LocalText;
  serviceScope: LocalText;
  profile: LocalText;
  challenge: LocalText;
  strategy: LocalText;
  result: LocalText;
  evidenceBasis: LocalText;
};

export const detailedCases: DetailedCase[] = [
  {
    id: 'professional-repositioning', year: '2017', category: 'complex',
    categoryLabel: { zh: '低分背景', en: 'Complex profile' },
    title: { zh: '把两年工作经历转化为申请主线', en: 'Turning two years of work into the core application narrative' },
    discipline: { zh: '工程与项目管理', en: 'Engineering & Project Management' },
    level: { zh: '授课型硕士', en: 'Taught master’s' },
    timeline: { zh: '2017 年秋季入学；5 月初取得结果', en: 'Autumn 2017 intake; outcome received in early May' },
    serviceScope: { zh: '背景诊断、申请定位、材料主线与递交协同', en: 'Profile diagnosis, positioning, application narrative and submission coordination' },
    profile: { zh: '985 本科；加权约 75/100；雅思 6.0；两年全职工作经历。', en: 'Top-tier Chinese university; weighted average around 75/100; IELTS 6.0; two years of full-time work.' },
    challenge: { zh: '学术与语言指标不突出，常规“成绩导向”表达无法形成竞争力。', en: 'Academic and language indicators were not distinctive, making a grade-led application unconvincing.' },
    strategy: { zh: '重构为“专业经验—项目管理能力—深造目标”证据链，弱化横向分数比较，强化职业成熟度与课程匹配。', en: 'Reframed the evidence around professional experience, project capability and a coherent postgraduate objective.' },
    result: { zh: '获得南洋理工大学与曼彻斯特大学联合项目管理项目录取。', en: 'Received an offer for the NTU–University of Manchester joint project-management programme.' },
    evidenceBasis: { zh: '来源：历史公司介绍中的匿名案例摘要；不公开申请人姓名与原始材料。', en: 'Basis: anonymised case summary in the archived company profile; applicant identity and source documents are not published.' },
  },
  {
    id: 'research-led-phd', year: '2017', category: 'phd',
    categoryLabel: { zh: '博士申请', en: 'Doctoral' },
    title: { zh: '以研究潜力形成多校博士结果', en: 'Building a multi-university doctoral outcome around research potential' },
    discipline: { zh: '理工科研究型项目', en: 'Research-based STEM programme' },
    level: { zh: '全日制博士', en: 'Full-time doctoral study' },
    timeline: { zh: '2017 年秋季入学；6 月取得多校结果', en: 'Autumn 2017 intake; multiple outcomes received in June' },
    serviceScope: { zh: '研究定位、履历与研究陈述统一、推荐证据和分层申请', en: 'Research positioning, aligned CV and statement, referee evidence and tiered applications' },
    profile: { zh: '985 本科；加权约 86；雅思 7.0；研究生入学考试 330+3.5；中文核心一作。', en: 'Top-tier Chinese university; average around 86; IELTS 7.0; GRE 330+3.5; first-author Chinese core-journal paper.' },
    challenge: { zh: '需要把单篇成果转化为持续的研究能力，而非简单罗列成绩和论文。', en: 'The application needed to show sustained research potential rather than list scores and one publication.' },
    strategy: { zh: '围绕研究主题、方法经验与未来问题意识统一个人履历、研究陈述和推荐证据，并分层匹配博士项目。', en: 'Aligned the CV, research statement and referee evidence around theme, methods and future research questions.' },
    result: { zh: '获得南洋理工大学博士录取，并取得奥克兰大学、澳大利亚国立大学与墨尔本大学博士录取。', en: 'Received doctoral offers from NTU, the University of Auckland, ANU and the University of Melbourne.' },
    evidenceBasis: { zh: '来源：历史公司介绍中的匿名案例摘要；结果按原始归档表述。', en: 'Basis: anonymised case summary in the archived company profile; outcomes follow the wording of the source archive.' },
  },
  {
    id: 'planning-without-internship', year: '2018', category: 'master',
    categoryLabel: { zh: '硕士申请', en: 'Master’s' },
    title: { zh: '没有实习，如何证明专业准备度', en: 'Demonstrating readiness without internship experience' },
    discipline: { zh: '城市规划', en: 'Urban Planning' },
    level: { zh: '授课型硕士', en: 'Taught master’s' },
    timeline: { zh: '录取信日期为 2017 年 3 月；归档案例页标注为 2018', en: 'Offer letter dated March 2017; archived case page labelled 2018' },
    serviceScope: { zh: '课程证据梳理、专业动机、学习缺口与目标课程匹配', en: 'Coursework evidence, disciplinary motivation, learning gaps and curriculum fit' },
    profile: { zh: '211 本科；加权约 84；雅思 6.5；无正式工作或实习经历。', en: 'Chinese 211 university; average around 84; IELTS 6.5; no formal work or internship experience.' },
    challenge: { zh: '背景较为标准，但缺少能够直接证明城市规划实践能力的经历。', en: 'A solid but conventional profile lacked direct evidence of urban-planning practice.' },
    strategy: { zh: '从课程、项目与空间问题意识中提取专业证据，建立“已有基础—学习缺口—目标课程”的闭环。', en: 'Extracted discipline evidence from coursework and projects, linking current foundation, learning gaps and target curriculum.' },
    result: { zh: '获得新加坡国立大学城市规划相关硕士项目录取。', en: 'Received an offer for an urban-planning-related master’s programme at NUS.' },
    evidenceBasis: { zh: '来源：历史匿名案例摘要及归档录取信；网站保留原始材料中的年份口径差异。', en: 'Basis: archived anonymised summary and offer letter; the website preserves the year discrepancy in the source materials.' },
  },
  {
    id: 'late-cycle-recovery', year: '2019', category: 'complex',
    categoryLabel: { zh: '特殊背景', en: 'Complex profile' },
    title: { zh: '延毕与晚申请窗口下的风险重排', en: 'Reordering risk in a late-cycle application after delayed graduation' },
    discipline: { zh: '电子工程相关方向', en: 'Electronics-related engineering' },
    level: { zh: '授课型硕士', en: 'Taught master’s' },
    timeline: { zh: '2019 年秋季入学；4 月中旬取得结果', en: 'Autumn 2019 intake; outcome received in mid-April' },
    serviceScope: { zh: '学业时间线说明、晚轮次选校、材料并行与风险管理', en: 'Academic timeline explanation, late-cycle selection, parallel materials and risk management' },
    profile: { zh: '211 本科；加权约 82；雅思 6.5；存在延毕经历，申请启动较晚。', en: 'Chinese 211 university; average around 82; IELTS 6.5; delayed graduation and a late application start.' },
    challenge: { zh: '需要同时解释学业节奏、控制时间风险，并在较短窗口内形成可提交材料。', en: 'The application needed to explain the academic timeline, control schedule risk and produce coherent materials quickly.' },
    strategy: { zh: '优先处理时间线与事实说明，再以工程课程基础和目标专业匹配支撑申请，采用并行材料管理。', en: 'Prioritised the timeline explanation, then supported fit through engineering coursework and parallel material management.' },
    result: { zh: '在申请季后段获得南洋理工大学电子相关硕士项目录取。', en: 'Received an offer for an electronics-related master’s programme at NTU late in the cycle.' },
    evidenceBasis: { zh: '来源：历史公司介绍中的匿名案例摘要；不公开个人身份和申请文件。', en: 'Basis: anonymised case summary in the archived company profile; identity and application files are not published.' },
  },
];

export type IllustrativeCase = {
  id: string;
  stage: LocalText;
  title: LocalText;
  profile: LocalText;
  goal: LocalText;
  plan: LocalText;
  target: LocalText;
  boundary: LocalText;
};

export const illustrativeCases: IllustrativeCase[] = [
  {
    id: 'kindergarten-transition',
    stage: { zh: '幼儿园 / 学前', en: 'Kindergarten / Early Years' },
    title: { zh: '中国家庭转入新加坡双语学前环境', en: 'A China-based family preparing for a Singapore bilingual early-years setting' },
    profile: { zh: '4—5 岁儿童，家庭计划在 12—18 个月内迁居或长期往返，希望兼顾中文基础、英语适应与情绪稳定。', en: 'A child aged four to five whose family expects to relocate or travel regularly within 12–18 months, while preserving Chinese foundations and supporting English and emotional adjustment.' },
    goal: { zh: '先确定课程与照护需求，再比较学校类型、入学时间、通勤与家庭安排。', en: 'Define curriculum and care needs before comparing school types, entry timing, commute and family arrangements.' },
    plan: { zh: '完成家庭访谈、语言与生活习惯观察、学校清单、开放日问题表和入学材料时间线。', en: 'Family interview, language and routine observation, school shortlist, open-day question set and admissions timeline.' },
    target: { zh: '形成 2—3 条可执行入学路径，并为入学前 12 周安排语言、作息与家校沟通准备。', en: 'Produce two to three viable entry pathways and a 12-week preparation plan for language, routines and parent–school communication.' },
    boundary: { zh: '综合示例，不对应真实学生；学校名额、录取与签证由学校及主管机关决定。', en: 'Composite scenario, not a real student record; places, admission and visas are decided by schools and authorities.' },
  },
  {
    id: 'primary-robotics',
    stage: { zh: '小学', en: 'Primary School' },
    title: { zh: '把机器人兴趣发展为持续的工程学习项目', en: 'Turning a robotics interest into a sustained engineering-learning project' },
    profile: { zh: '小学高年级学生，动手能力较强，但项目记录零散，家长希望兼顾数学、编程、表达与竞赛体验。', en: 'An upper-primary student with strong practical interest but fragmented project records; the family wants balanced progress in mathematics, coding, communication and competition exposure.' },
    goal: { zh: '不以“拿奖”为单一目标，建立可以连续迭代的设计、测试与展示能力。', en: 'Build iterative design, testing and presentation capability rather than treating an award as the sole objective.' },
    plan: { zh: '以传感器小车为主项目，分解机械结构、基础编程、测试日志、英文展示和合适赛事筛选。', en: 'Use a sensor-based vehicle as the anchor project, covering mechanics, basic coding, test logs, English presentation and suitable event selection.' },
    target: { zh: '完成可运行原型、项目日志与 3 分钟双语展示，并具备参加适龄赛事或校内展示的材料。', en: 'Complete a working prototype, project log and three-minute bilingual presentation suitable for an age-appropriate event or school showcase.' },
    boundary: { zh: '综合示例，不对应真实获奖案例；报名资格、赛制与奖项由主办方决定。', en: 'Composite scenario, not a real award case; eligibility, rules and awards are controlled by organisers.' },
  },
  {
    id: 'middle-school-math-pathway',
    stage: { zh: '初中', en: 'Lower Secondary' },
    title: { zh: '奥林匹克数学训练与国际课程转轨并行', en: 'Olympiad mathematics preparation alongside an international-curriculum transition' },
    profile: { zh: '初二学生，校内数学基础较好，计划转入 IGCSE 或同类国际课程，但竞赛训练缺少层级和节奏。', en: 'A Year 8 student with strong school mathematics who plans to move into IGCSE or a comparable curriculum but lacks a structured competition pathway.' },
    goal: { zh: '区分校内课程、竞赛能力与国际课程语言要求，避免用刷题替代系统学习。', en: 'Separate school curriculum, competition capability and language demands, avoiding unstructured problem drilling.' },
    plan: { zh: '通过诊断卷建立代数、几何、数论与组合模块图，安排 16 周训练、英文数学表达和阶段测评。', en: 'Map algebra, geometry, number theory and combinatorics through diagnostics, followed by a 16-week plan, mathematical English and staged assessment.' },
    target: { zh: '形成清晰的能力基线、训练记录和下一阶段赛事选择依据，同时完成国际课程衔接清单。', en: 'Create a documented baseline, training record and evidence for selecting the next event, alongside an international-curriculum transition checklist.' },
    boundary: { zh: '综合示例；不承诺竞赛名次、分数提升幅度或学校录取。', en: 'Composite scenario; no competition rank, score increase or school admission is guaranteed.' },
  },
  {
    id: 'high-school-multi-system',
    stage: { zh: '高中', en: 'Upper Secondary' },
    title: { zh: '在 A-Level、IB 与 AP 之间做家庭决策', en: 'A family decision across A-Level, IB and AP pathways' },
    profile: { zh: '高一阶段，学术表现均衡，目标国家尚未确定，家庭对课程难度、活动投入与申请节奏存在不同判断。', en: 'A Year 10 student with balanced performance and no fixed destination; family members differ on curriculum difficulty, activity load and application timing.' },
    goal: { zh: '从学生能力、学校资源、目标地区和家庭承受度出发，而不是只比较课程名气。', en: 'Decide from student capability, school resources, destination options and family capacity rather than curriculum reputation alone.' },
    plan: { zh: '比较三套课程的科目结构、评估方式、语言要求、活动空间与大学申请影响，形成两条主路径和一条备选路径。', en: 'Compare subject structures, assessment, language demands, activity capacity and university implications, producing two main routes and one contingency.' },
    target: { zh: '完成家庭共识文件、未来 24 个月学术与活动日历，以及专业探索和选校研究任务。', en: 'Complete a family decision record, a 24-month academic and activity calendar, and structured subject and university exploration.' },
    boundary: { zh: '综合示例；课程选择须结合具体学校规定与学生实际表现持续调整。', en: 'Composite scenario; curriculum decisions must be reviewed against school rules and the student’s actual progress.' },
  },
  {
    id: 'robotics-competition-team',
    stage: { zh: '机器人比赛', en: 'Robotics Competition' },
    title: { zh: '从组队到答辩的机器人竞赛项目管理', en: 'Managing a robotics competition from team formation to judging' },
    profile: { zh: '3—5 人中学生团队，成员能力不一，有基础设备但缺少任务分工、测试标准和答辩材料。', en: 'A three-to-five-member secondary team with mixed capability, basic equipment but no clear task ownership, test standard or judging pack.' },
    goal: { zh: '把作品、工程日志、团队协作与现场表达作为同一项目交付。', en: 'Treat the prototype, engineering log, teamwork and live presentation as one integrated delivery.' },
    plan: { zh: '建立规则核对表、责任矩阵、每周冲刺、故障清单、版本记录、海报和问答演练。', en: 'Build a rules checklist, responsibility matrix, weekly sprints, failure log, version record, poster and judging rehearsal.' },
    target: { zh: '在报名截止前完成合规原型、工程记录和答辩包，并能够解释设计选择与测试结果。', en: 'Complete a compliant prototype, engineering record and judging pack before registration closes, with clear explanation of design choices and test results.' },
    boundary: { zh: '综合示例；AEI 可提供项目协调与学习支持，不代替参赛学生完成作品，也不保证奖项。', en: 'Composite scenario; AEI may support learning and coordination but does not produce the entry for students or guarantee an award.' },
  },
  {
    id: 'undergraduate-paper',
    stage: { zh: '本科研究 / 论文', en: 'Undergraduate Research / Paper' },
    title: { zh: '把课程项目发展为可投稿的研究稿件', en: 'Developing a course project into a submission-ready research manuscript' },
    profile: { zh: '本科二至三年级学生，已有课程数据和初步结果，但研究问题、方法说明与文献关系不够完整。', en: 'A second- or third-year undergraduate with course-project data and preliminary findings but an incomplete research question, methods account and literature positioning.' },
    goal: { zh: '先判断研究是否成立，再决定是否进入会议、期刊或校内成果路径。', en: 'First determine whether the study is viable, then select a conference, journal or internal-output pathway.' },
    plan: { zh: '完成问题重述、文献地图、方法核查、数据与图表审阅、写作计划、作者责任和目标渠道筛选。', en: 'Refine the question, map literature, review methods, data and figures, set a writing plan, clarify authorship and shortlist suitable outlets.' },
    target: { zh: '形成结构完整、证据一致、可进入导师或期刊预审的稿件包与回应清单。', en: 'Produce a coherent manuscript package and response checklist suitable for supervisor or editorial pre-review.' },
    boundary: { zh: '综合示例；不代写、不伪造数据，发表与审稿决定由期刊、会议或出版社作出。', en: 'Composite scenario; no ghostwriting or fabricated data. Publication and review decisions rest with journals, conferences or publishers.' },
  },
  {
    id: 'student-monograph',
    stage: { zh: '专著 / 出版项目', en: 'Monograph / Publishing Project' },
    title: { zh: '把长期专题积累整理为专著提案', en: 'Structuring long-term subject work into a monograph proposal' },
    profile: { zh: '高中生、本科生或青年研究者持续积累某一主题的访谈、案例与阅读笔记，希望形成正式出版方向。', en: 'A senior-school student, undergraduate or early-career researcher with sustained interviews, cases and reading notes who wants to explore a formal publication route.' },
    goal: { zh: '先确认原创性、读者与内容规模，避免把资料汇编误当作可出版专著。', en: 'Clarify originality, readership and scale before treating collected material as a publishable monograph.' },
    plan: { zh: '完成主题边界、目录、样章、引文与图片权限清单、作者说明、出版方向和项目时间表。', en: 'Develop scope, contents, sample chapter, citation and image-rights checklist, author statement, publishing route and project timeline.' },
    target: { zh: '形成可供导师、编辑或出版社评估的专著提案与样章，不提前宣称已出版。', en: 'Produce a monograph proposal and sample chapter for evaluation by a supervisor, editor or publisher, without claiming publication in advance.' },
    boundary: { zh: '综合示例；书号、出版合同、出版时间与发行由合资格出版社及相关机构决定。', en: 'Composite scenario; ISBN, contract, schedule and distribution are determined by qualified publishers and relevant bodies.' },
  },
  {
    id: 'family-cross-border-plan',
    stage: { zh: '家庭跨国规划', en: 'Cross-border Family Planning' },
    title: { zh: '教育路径、家属安排与长期身份同步规划', en: 'Aligning education, dependant arrangements and long-term status planning' },
    profile: { zh: '家庭成员分别位于中国与新加坡，涉及子女入学、家长工作安排、短期签证与未来长期居留选择。', en: 'A family split between China and Singapore, balancing school entry, parental work, short-term visas and future residence options.' },
    goal: { zh: '把教育决策与身份路径放到同一时间轴，但明确教育咨询与受监管法律意见的分工。', en: 'Place education decisions and status pathways on one timeline while separating education consulting from regulated legal advice.' },
    plan: { zh: '整理家庭目标、时间节点、学校要求、材料依赖、风险清单，并在需要时协调持牌专业人士。', en: 'Map family goals, milestones, school requirements, document dependencies and risks, coordinating licensed professionals where needed.' },
    target: { zh: '形成 12—24 个月跨国行动图，明确每项决定的负责人、前置条件和备选方案。', en: 'Produce a 12–24 month cross-border action map with owners, prerequisites and contingencies for each decision.' },
    boundary: { zh: '综合示例；签证、永居和公民身份由主管机关决定，法律意见由相应法域持牌人士提供。', en: 'Composite scenario; visas, residence and citizenship are decided by authorities, with legal advice provided by licensed professionals.' },
  },
];

export const outcomeGroups = [
  { title: { zh: '材料、化学与化工', en: 'Materials, Chemistry & Chemical Engineering' }, programmes: [
    { zh: '南洋理工大学材料科学与工程硕士', en: 'NTU MSc Materials Science & Engineering' },
    { zh: '新加坡国立大学材料科学与工程硕士', en: 'NUS MSc Materials Science & Engineering' },
    { zh: '新加坡国立大学化学硕士', en: 'NUS MSc Chemistry' },
    { zh: '新加坡国立大学化学与生物分子工程硕士', en: 'NUS MSc Chemical & Biomolecular Engineering' },
    { zh: '帝国理工学院材料科学与工程研究硕士', en: 'Imperial MRes Materials Science & Engineering' },
  ] },
  { title: { zh: '电子、计算与信息', en: 'EEE, Computing & Information' }, programmes: [
    { zh: '南洋理工大学电子电气工程博士', en: 'NTU PhD Electrical & Electronic Engineering' },
    { zh: '新加坡国立大学计算机科学硕士', en: 'NUS MSc Computer Science' },
    { zh: '新加坡国立大学系统科学研究院项目', en: 'NUS Institute of Systems Science programme' },
    { zh: '系统分析方向', en: 'Systems Analysis' },
    { zh: '信号处理方向', en: 'Signal Processing' },
  ] },
  { title: { zh: '商业与管理', en: 'Business & Management' }, programmes: [
    { zh: '香港大学商业分析硕士', en: 'HKU MSc Business Analytics' },
    { zh: '香港大学会计学硕士', en: 'HKU Master of Accounting' },
    { zh: '商业管理方向', en: 'Business Management' },
    { zh: '国际贸易方向', en: 'International Trade' },
    { zh: '项目管理方向', en: 'Project Management' },
  ] },
  { title: { zh: '城市、环境与安全', en: 'Urban, Environment & Safety' }, programmes: [
    { zh: '城市规划方向', en: 'Urban Planning' },
    { zh: '城市设计方向', en: 'Urban Design' },
    { zh: '环境管理方向', en: 'Environmental Management' },
    { zh: '新加坡国立大学安全、健康与环境技术硕士', en: 'NUS MSc Safety, Health & Environmental Technology' },
    { zh: '机械工程方向', en: 'Mechanical Engineering' },
  ] },
];

export const programmeTracks = [
  { number: '01', title: { zh: '新加坡全真课堂', en: 'Singapore Immersion Classroom' }, duration: { zh: '8 天 7 晚', en: '8 DAYS / 7 NIGHTS' }, body: { zh: '面向中学生的科技创新与可持续发展训练营，组合人工智能、工业 4.0、校园学习、企业参访与项目展示。', en: 'A youth programme combining AI, Industry 4.0, sustainability, campus learning, industry visits and project presentation.' } },
  { number: '02', title: { zh: '短期学术营训', en: 'Short Academic Programmes' }, duration: { zh: '7—14 天', en: '7–14 DAYS' }, body: { zh: '围绕可持续发展、科学技术工程与数学、机器人、商业创新等主题定制课程与团队项目。', en: 'Custom courses and team projects in sustainability, STEM, robotics, business and innovation.' } },
  { number: '03', title: { zh: '海外短期实习', en: 'International Short Internship' }, duration: { zh: '15—20 天', en: '15–20 DAYS' }, body: { zh: '面向具备合法参与条件的学生和职场新人，覆盖项目管理、测试、教育与运营等岗位场景。', en: 'Short workplace exposure in project management, testing, education and operations, subject to lawful participation and host confirmation.' } },
  { number: '04', title: { zh: '机构研修与参访', en: 'Executive Study Visits' }, duration: { zh: '定制周期', en: 'CUSTOM' }, body: { zh: '面向院校、企业与公共机构，围绕城市治理、安全环境健康、工程生产力与创新设计内容。', en: 'Custom visits for universities, companies and public bodies around governance, SHE, productivity and innovation.' } },
];

export const partnershipModels = [
  { title: { zh: '学生流动', en: 'Student Mobility' }, body: { zh: '暑校、短期访学、学期交换、研究实习与升学衔接。', en: 'Summer schools, short visits, semester exchange, research internships and progression pathways.' } },
  { title: { zh: '联合培养', en: 'Joint Pathways' }, body: { zh: '围绕 4+1、4+2 或其他项目路径开展需求分析、课程衔接与沟通协调。', en: 'Needs analysis, curriculum alignment and coordination for 4+1, 4+2 and other pathway models.' } },
  { title: { zh: '科研与教师交流', en: 'Research & Faculty Exchange' }, body: { zh: '课题组互访、联合研讨、学术论坛与研究合作机会梳理。', en: 'Research-group visits, joint seminars, academic forums and collaboration scoping.' } },
  { title: { zh: '合作框架与备忘录', en: 'Frameworks & MoUs' }, body: { zh: '从合作意向、范围与治理机制，到文本协调、责任分工和年度复盘。', en: 'From intent, scope and governance to document coordination, responsibilities and annual review.' } },
];
