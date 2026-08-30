export type Lang = 'zh' | 'en';
export type LocalText = { zh: string; en: string };
export const assetPath = (file: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/${file}`;

export const applicationYears = [
  { year: '2016', count: 2 }, { year: '2017', count: 3 },
  { year: '2018', count: 8 }, { year: '2019', count: 3 },
  { year: '2020', count: 6 }, { year: '2021', count: 19 },
  { year: '2022', count: 22 }, { year: '2023', count: 20 },
  { year: '2024', count: 21 }, { year: '2025', count: 12 },
  { year: '2026', count: 10 },
];

export const caseMetrics = [
  { value: '126', zh: '按一级文件夹统计的项目案例', en: 'project cases counted from first-level folders' },
  { value: '11', zh: '连续年度项目记录', en: 'consecutive years of project records' },
  { value: '55', zh: '历史录取结果证据图片', en: 'archived result-evidence images' },
  { value: '20+', zh: '覆盖专业与项目方向', en: 'disciplines and programme types' },
];

export const yearInsights = [
  { year: '2016', count: 2, focus: { zh: '学业辅导与海外升学起步', en: 'Academic support and early overseas progression' }, analysis: { zh: '早期项目以单项学科辅导和院校申请为主，建立了从学习诊断到申请执行的基础流程。', en: 'Early work centred on subject support and university applications, establishing a basic process from learning diagnosis to application delivery.' } },
  { year: '2017', count: 3, focus: { zh: '硕博申请与材料重构', en: 'Postgraduate applications and narrative restructuring' }, analysis: { zh: '项目开始覆盖硕士与博士申请，重点处理学术指标、工作经历和研究潜力之间的证据关系。', en: 'Projects expanded into master’s and doctoral applications, focusing on the evidence relationship between academic indicators, work experience and research potential.' } },
  { year: '2018', count: 8, focus: { zh: '多路径申请与转学、实习需求', en: 'Multiple application, transfer and internship pathways' }, analysis: { zh: '项目类型明显丰富，除完整申请外，也出现转学、文书和实习等单项需求，服务边界更加细分。', en: 'The portfolio broadened beyond full applications to transfer, writing and internship assignments, creating more clearly defined service scopes.' } },
  { year: '2019', count: 3, focus: { zh: '个人申请与院校合作并行', en: 'Individual applications alongside institutional cooperation' }, analysis: { zh: '个人升学项目与校际交流项目并行，AEI 的角色从申请支持延伸至跨机构协调。', en: 'Individual progression projects ran alongside university exchange work, extending AEI’s role from application support to cross-institutional coordination.' } },
  { year: '2020', count: 6, focus: { zh: '综合申请与推荐材料支持', en: 'Integrated applications and referee documentation' }, analysis: { zh: '项目包括完整申请、专项材料与推荐文件支持，体现出材料协同和多节点管理能力。', en: 'Projects included full applications, specialist materials and referee documentation, demonstrating coordinated management across multiple submission components.' } },
  { year: '2021', count: 19, focus: { zh: '申请规模增长与服务类型扩展', en: 'Larger volume and broader service types' }, analysis: { zh: '除硕博申请外，年度项目还覆盖签证、交换与暑期项目，形成申请前后端相互衔接的服务结构。', en: 'In addition to postgraduate applications, projects covered visas, exchange and summer programmes, creating a more connected pre- and post-application structure.' } },
  { year: '2022', count: 22, focus: { zh: '博士、研究奖学金与交换项目', en: 'Doctoral, research-scholarship and exchange projects' }, analysis: { zh: '年度项目数量达到阶段高位，博士、研究奖学金和交换项目并行，体现更复杂的项目组合管理。', en: 'Project volume reached a period high, with doctoral, research-scholarship and exchange work requiring more complex portfolio management.' } },
  { year: '2023', count: 20, focus: { zh: '研究型申请、面试与专项材料', en: 'Research applications, interviews and specialist materials' }, analysis: { zh: '项目更加模块化，完整申请与研究计划、简历、面试等专项任务并存，适配不同阶段需求。', en: 'Delivery became more modular, combining full applications with research proposals, CVs and interview preparation for different stages of the applicant journey.' } },
  { year: '2024', count: 21, focus: { zh: '博士申请与复杂背景管理', en: 'Doctoral applications and complex-profile management' }, analysis: { zh: '博士和跨阶段项目占比提升，同时处理面试、学位证明、春季入学与进度调整等复杂节点。', en: 'Doctoral and cross-stage projects increased, alongside complex milestones such as interviews, degree evidence, spring intake and schedule adjustments.' } },
  { year: '2025', count: 12, focus: { zh: '个性化申请与项目收口', en: 'Individualised applications and project closure' }, analysis: { zh: '项目以个性化申请管理为主，归档中同时保留已完成和关闭状态，便于追溯项目生命周期。', en: 'Projects primarily involved individual application management, with completed and closed statuses retained to preserve a traceable project lifecycle.' } },
  { year: '2026', count: 10, focus: { zh: '多专业申请持续推进', en: 'Ongoing applications across multiple disciplines' }, analysis: { zh: '当前年度项目覆盖不同专业方向，其中包含艺术类等更具专业差异的申请，部分仍在推进。', en: 'Current-year work spans multiple disciplines, including more specialised areas such as the arts; some projects remain in progress.' } },
];

export const serviceGroups = [
  {
    number: '01', slug: 'admissions',
    title: { zh: '升学与申请', en: 'Admissions & Pathways' },
    summary: { zh: '硕士、博士、跨专业与特殊背景申请，从定位到递交形成完整证据链。', en: 'Master’s, doctoral, cross-disciplinary and complex-profile applications, structured from positioning to submission.' },
    items: [
      { zh: '目标与背景诊断', en: 'Goal and profile diagnosis' },
      { zh: '分层选校与专业组合', en: 'Tiered university and programme portfolio' },
      { zh: '材料逻辑、面试与递交管理', en: 'Narrative, interview and submission management' },
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
