export type Lang = 'zh' | 'en';
export type LocalText = { zh: string; en: string };
export const assetPath = (file: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/${file}`;

export const applicationYears = [
  { year: '2016', count: 2 }, { year: '2017', count: 3 },
  { year: '2018', count: 8 }, { year: '2019', count: 3 },
  { year: '2020', count: 5 }, { year: '2021', count: 19 },
  { year: '2022', count: 22 }, { year: '2023', count: 17 },
  { year: '2024', count: 21 }, { year: '2025', count: 12 },
  { year: '2026', count: 10 },
];

export const caseMetrics = [
  { value: '120+', zh: '申请与服务档案', en: 'application and service records' },
  { value: '11', zh: '连续年度记录', en: 'years of continuous records' },
  { value: '55', zh: '历史录取结果证据图片', en: 'archived result-evidence images' },
  { value: '20+', zh: '覆盖专业与项目方向', en: 'disciplines and programme types' },
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
      { zh: '可持续发展、STEM 与 AI', en: 'Sustainability, STEM and AI' },
      { zh: '大学与企业参访', en: 'University and industry immersion' },
      { zh: '短期实习与项目展示', en: 'Short internships and project showcases' },
    ],
  },
  {
    number: '04', slug: 'partnerships',
    title: { zh: '院校与科研合作', en: 'Institutional & Research Partnerships' },
    summary: { zh: '支持学生流动、课题组互访、联合培养与 MoU 从构想到落地。', en: 'Supporting mobility, research-group exchange, joint pathways and MoUs from intent to delivery.' },
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
  profile: LocalText;
  challenge: LocalText;
  strategy: LocalText;
  result: LocalText;
};

export const detailedCases: DetailedCase[] = [
  {
    id: 'professional-repositioning', year: '2017', category: 'complex',
    categoryLabel: { zh: '低分背景', en: 'Complex profile' },
    title: { zh: '把两年工作经历转化为申请主线', en: 'Turning two years of work into the core application narrative' },
    profile: { zh: '985 本科；加权约 75/100；IELTS 6.0；两年全职工作经历。', en: 'Top-tier Chinese university; weighted average around 75/100; IELTS 6.0; two years of full-time work.' },
    challenge: { zh: '学术与语言指标不突出，常规“成绩导向”表达无法形成竞争力。', en: 'Academic and language indicators were not distinctive, making a grade-led application unconvincing.' },
    strategy: { zh: '重构为“专业经验—项目管理能力—深造目标”证据链，弱化横向分数比较，强化职业成熟度与课程匹配。', en: 'Reframed the evidence around professional experience, project capability and a coherent postgraduate objective.' },
    result: { zh: '获得南洋理工大学与曼彻斯特大学联合项目管理项目录取。', en: 'Received an offer for the NTU–University of Manchester joint project-management programme.' },
  },
  {
    id: 'research-led-phd', year: '2017', category: 'phd',
    categoryLabel: { zh: '博士申请', en: 'Doctoral' },
    title: { zh: '以研究潜力形成多校博士结果', en: 'Building a multi-university doctoral outcome around research potential' },
    profile: { zh: '985 本科；加权约 86；IELTS 7.0；GRE 330+3.5；中文核心一作。', en: 'Top-tier Chinese university; average around 86; IELTS 7.0; GRE 330+3.5; first-author Chinese core-journal paper.' },
    challenge: { zh: '需要把单篇成果转化为持续的研究能力，而非简单罗列成绩和论文。', en: 'The application needed to show sustained research potential rather than list scores and one publication.' },
    strategy: { zh: '围绕研究主题、方法经验与未来问题意识统一 CV、研究陈述和推荐证据，并分层匹配博士项目。', en: 'Aligned the CV, research statement and referee evidence around theme, methods and future research questions.' },
    result: { zh: '获得南洋理工大学博士录取，并取得奥克兰大学、澳大利亚国立大学与墨尔本大学博士录取。', en: 'Received doctoral offers from NTU, the University of Auckland, ANU and the University of Melbourne.' },
  },
  {
    id: 'planning-without-internship', year: '2018', category: 'master',
    categoryLabel: { zh: '硕士申请', en: 'Master’s' },
    title: { zh: '没有实习，如何证明专业准备度', en: 'Demonstrating readiness without internship experience' },
    profile: { zh: '211 本科；加权约 84；IELTS 6.5；无正式工作或实习经历。', en: 'Chinese 211 university; average around 84; IELTS 6.5; no formal work or internship experience.' },
    challenge: { zh: '背景较为标准，但缺少能够直接证明城市规划实践能力的经历。', en: 'A solid but conventional profile lacked direct evidence of urban-planning practice.' },
    strategy: { zh: '从课程、项目与空间问题意识中提取专业证据，建立“已有基础—学习缺口—目标课程”的闭环。', en: 'Extracted discipline evidence from coursework and projects, linking current foundation, learning gaps and target curriculum.' },
    result: { zh: '获得新加坡国立大学城市规划相关硕士项目录取。', en: 'Received an offer for an urban-planning-related master’s programme at NUS.' },
  },
  {
    id: 'late-cycle-recovery', year: '2019', category: 'complex',
    categoryLabel: { zh: '特殊背景', en: 'Complex profile' },
    title: { zh: '延毕与晚申请窗口下的风险重排', en: 'Reordering risk in a late-cycle application after delayed graduation' },
    profile: { zh: '211 本科；加权约 82；IELTS 6.5；存在延毕经历，申请启动较晚。', en: 'Chinese 211 university; average around 82; IELTS 6.5; delayed graduation and a late application start.' },
    challenge: { zh: '需要同时解释学业节奏、控制时间风险，并在较短窗口内形成可提交材料。', en: 'The application needed to explain the academic timeline, control schedule risk and produce coherent materials quickly.' },
    strategy: { zh: '优先处理时间线与事实说明，再以工程课程基础和目标专业匹配支撑申请，采用并行材料管理。', en: 'Prioritised the timeline explanation, then supported fit through engineering coursework and parallel material management.' },
    result: { zh: '在申请季后段获得南洋理工大学电子相关硕士项目录取。', en: 'Received an offer for an electronics-related master’s programme at NTU late in the cycle.' },
  },
];

export const outcomeGroups = [
  { title: { zh: '材料、化学与化工', en: 'Materials, Chemistry & Chemical Engineering' }, programmes: ['NTU MSc MSE', 'NUS MSc MSE', 'NUS MSc Chemistry', 'NUS MSc ChBE', 'Imperial MRes MSE'] },
  { title: { zh: '电子、计算与信息', en: 'EEE, Computing & Information' }, programmes: ['NTU PhD EEE', 'NUS MSc CS', 'NUS ISS', 'Systems Analysis', 'Signal Processing'] },
  { title: { zh: '商业与管理', en: 'Business & Management' }, programmes: ['HKU Business Analytics', 'HKU Accounting', 'Business Management', 'International Trade', 'Project Management'] },
  { title: { zh: '城市、环境与安全', en: 'Urban, Environment & Safety' }, programmes: ['Urban Planning', 'Urban Design', 'Environmental Management', 'NUS MSc SHE', 'Mechanical Engineering'] },
];

export const programmeTracks = [
  { number: '01', title: { zh: '新加坡全真课堂', en: 'Singapore Immersion Classroom' }, duration: '8D / 7N', body: { zh: '面向中学生的科技创新与可持续发展训练营，组合 AI、工业 4.0、校园学习、企业参访与项目展示。', en: 'A youth programme combining AI, Industry 4.0, sustainability, campus learning, industry visits and project presentation.' } },
  { number: '02', title: { zh: '短期学术营训', en: 'Short Academic Programmes' }, duration: '7–14 DAYS', body: { zh: '围绕可持续发展、STEM、机器人、商业创新等主题定制课程与团队项目。', en: 'Custom courses and team projects in sustainability, STEM, robotics, business and innovation.' } },
  { number: '03', title: { zh: '海外短期实习', en: 'International Short Internship' }, duration: '15–20 DAYS', body: { zh: '面向具备合法参与条件的学生和职场新人，覆盖项目管理、测试、教育与运营等岗位场景。', en: 'Short workplace exposure in project management, testing, education and operations, subject to lawful participation and host confirmation.' } },
  { number: '04', title: { zh: '机构研修与参访', en: 'Executive Study Visits' }, duration: 'CUSTOM', body: { zh: '面向院校、企业与公共机构，围绕城市治理、安全环境健康、工程生产力与创新设计内容。', en: 'Custom visits for universities, companies and public bodies around governance, SHE, productivity and innovation.' } },
];

export const partnershipModels = [
  { title: { zh: '学生流动', en: 'Student Mobility' }, body: { zh: '暑校、短期访学、学期交换、研究实习与升学衔接。', en: 'Summer schools, short visits, semester exchange, research internships and progression pathways.' } },
  { title: { zh: '联合培养', en: 'Joint Pathways' }, body: { zh: '围绕 4+1、4+2 或其他项目路径开展需求分析、课程衔接与沟通协调。', en: 'Needs analysis, curriculum alignment and coordination for 4+1, 4+2 and other pathway models.' } },
  { title: { zh: '科研与教师交流', en: 'Research & Faculty Exchange' }, body: { zh: '课题组互访、联合研讨、学术论坛与研究合作机会梳理。', en: 'Research-group visits, joint seminars, academic forums and collaboration scoping.' } },
  { title: { zh: '合作框架与 MoU', en: 'Frameworks & MoUs' }, body: { zh: '从合作意向、范围与治理机制，到文本协调、责任分工和年度复盘。', en: 'From intent, scope and governance to document coordination, responsibilities and annual review.' } },
];
