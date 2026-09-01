import type { LocalText } from './site-data';

export type DetailPageData = {
  section: LocalText;
  title: LocalText;
  proposition: LocalText;
  intro: LocalText;
  audience: LocalText[];
  process: { title: LocalText; body: LocalText }[];
  advantages: { title: LocalText; body: LocalText }[];
  relatedCases: { title: LocalText; meta: LocalText; href: string }[];
  faq: { question: LocalText; answer: LocalText }[];
  institutional?: boolean;
};

const t = (zh: string, en: string): LocalText => ({ zh, en });

export const detailPages: Record<string, DetailPageData> = {
  admissions: {
    section: t('个人成长服务 / 01', 'PERSONAL SERVICES / 01'),
    title: t('升学与申请', 'Admissions & Pathways'),
    proposition: t('从幼儿园到硕博，把家庭目标、学生能力与时间整理成可执行路径。', 'From early years to postgraduate study, turn family goals, student capability and timing into an executable pathway.'),
    intro: t('适用于幼儿园、小学、初高中、本科、硕士、博士、转轨、跨专业及特殊背景等情形。低龄阶段强调家庭决策、课程与学校匹配；大学及以上阶段进一步覆盖材料、面试与递交管理。服务范围在开始前书面确认。', 'For kindergarten, primary, secondary, undergraduate, master’s, doctoral, school-transition, cross-disciplinary and complex-profile needs. Early-years work centres on family decisions, curriculum and school fit; university and postgraduate work adds materials, interviews and submission management. Scope is agreed in writing before work begins.'),
    audience: [t('正在比较幼儿园、小学、初高中或国际课程的家庭', 'Families comparing early-years, primary, secondary or international-curriculum options'), t('准备本科、转学、硕士或博士申请的学生', 'Students preparing undergraduate, transfer, master’s or doctoral applications'), t('需要家庭沟通、材料、面试与多节点协同的申请者', 'Applicants needing family alignment, materials, interviews and multi-stage coordination')],
    process: [
      { title: t('背景诊断', 'Profile diagnosis'), body: t('核对成绩、语言、研究、工作经历、时间与限制条件。', 'Review academics, language, research, work, timing and constraints.') },
      { title: t('分层定位', 'Tiered positioning'), body: t('按匹配度、风险与截止日期形成院校和专业组合。', 'Build a programme portfolio by fit, risk and deadline.') },
      { title: t('证据重构', 'Evidence narrative'), body: t('统一简历、陈述、推荐证据与补充说明的事实逻辑。', 'Align the CV, statements, referee evidence and explanations.') },
      { title: t('递交与复盘', 'Submit and review'), body: t('管理递交、补件、面试与结果节点，并记录下一步。', 'Manage submission, follow-up, interview and outcome milestones.') },
    ],
    advantages: [
      { title: t('不以模板替代事实', 'Evidence before templates'), body: t('所有叙事从真实经历、原始材料和可核实信息出发。', 'Every narrative starts with authentic experience and verifiable source material.') },
      { title: t('分清服务与结果', 'Clear outcome boundaries'), body: t('不以案例数量或历史结果承诺未来录取。', 'Case volume and past outcomes are never presented as future guarantees.') },
      { title: t('项目化管理', 'Project discipline'), body: t('明确任务、责任人、截止日期与版本，降低漏项风险。', 'Tasks, owners, deadlines and versions are made explicit.') },
    ],
    relatedCases: [
      { title: t('中国家庭全龄教育典型情境', 'Illustrative all-stage scenarios for China-based families'), meta: t('幼儿园 · 小学 · 初高中 · 大学', 'Early years · Primary · Secondary · University'), href: '/cases/#illustrative' },
      { title: t('工作经历如何成为申请主线', 'Work experience as the application spine'), meta: t('工程与项目管理 · 授课型硕士', 'Engineering & project management · Taught master’s'), href: '/cases/#analysis' },
    ],
    faq: [
      { question: t('是否承诺录取？', 'Do you guarantee admission?'), answer: t('不承诺。AEI 对服务范围、过程和交付负责；录取决定由院校作出。', 'No. AEI is accountable for agreed scope, process and delivery; institutions make admission decisions.') },
      { question: t('是否可以只做一项材料？', 'Can I request one defined deliverable?'), answer: t('可以。单项材料、面试或定位服务会在开始前说明边界及依赖材料。', 'Yes. A single document, interview or positioning scope is defined with its dependencies before work begins.') },
    ],
  },
  research: {
    section: t('个人成长服务 / 02', 'PERSONAL SERVICES / 02'),
    title: t('学术与研究发展', 'Academic & Research Development'),
    proposition: t('从一个研究兴趣，走向清晰的问题、方法与表达。', 'Develop an interest into a clear question, method and scholarly argument.'),
    intro: t('面向研究型申请、研究计划、论文表达与创新项目。AEI 提供结构、方法与沟通支持，不代写、不捏造数据、不替代导师或期刊判断。', 'For research applications, proposals, scholarly communication and innovation projects. AEI supports structure, method and communication without ghost-writing, fabricating data or replacing supervisor or journal judgement.'),
    audience: [t('准备研究型硕士或博士申请的学生', 'Students preparing research master’s or doctoral applications'), t('需要厘清研究问题与方法路径的早期研究者', 'Early researchers clarifying questions and methods'), t('需要改善论文结构与学术表达的作者', 'Authors improving manuscript structure and scholarly communication')],
    process: [
      { title: t('问题界定', 'Question framing'), body: t('梳理研究对象、现有证据、知识缺口与可回答范围。', 'Clarify the object, current evidence, gap and answerable scope.') },
      { title: t('方法设计', 'Method design'), body: t('使研究问题、资料、分析方法和限制条件相互对应。', 'Align questions, data, analysis and limitations.') },
      { title: t('论证组织', 'Argument design'), body: t('建立章节结构、证据顺序与引用责任。', 'Build chapter structure, evidence order and citation accountability.') },
      { title: t('反馈迭代', 'Review cycles'), body: t('按目标版本迭代，保留修改边界和待确认事项。', 'Iterate toward a defined version while preserving boundaries and open items.') },
    ],
    advantages: [
      { title: t('学术诚信', 'Academic integrity'), body: t('不制造研究经历、数据、作者身份或出版承诺。', 'No invented research experience, data, authorship or publication promise.') },
      { title: t('方法优先', 'Method first'), body: t('先检查问题与证据是否匹配，再优化表达。', 'Check whether questions and evidence align before polishing prose.') },
      { title: t('可追溯反馈', 'Traceable feedback'), body: t('将问题、建议与修改责任分开记录。', 'Record issues, recommendations and ownership separately.') },
    ],
    relatedCases: [
      { title: t('以研究潜力形成多校博士结果', 'Research potential across doctoral applications'), meta: t('理工科 · 全日制博士', 'STEM · Full-time doctoral'), href: '/cases/#analysis' },
      { title: t('研究项目的公开资助记录', 'Public trace of a funded research project'), meta: t('AEI-001 · 2023', 'AEI-001 · 2023'), href: '/evidence/#external-traces' },
    ],
    faq: [
      { question: t('会代写论文或研究计划吗？', 'Do you ghost-write manuscripts or proposals?'), answer: t('不会。服务聚焦诊断、结构、方法与反馈，作者对内容、数据和最终提交负责。', 'No. Support covers diagnosis, structure, method and feedback; the author remains responsible for content, data and submission.') },
      { question: t('能保证发表吗？', 'Can publication be guaranteed?'), answer: t('不能。编辑和审稿决定由期刊作出，历史经验不构成发表承诺。', 'No. Editorial and peer-review decisions belong to the journal; past experience is not a publication guarantee.') },
    ],
  },
  career: {
    section: t('个人成长服务 / 03', 'PERSONAL SERVICES / 03'), title: t('职业与人才发展', 'Career & Talent Development'),
    proposition: t('把学习经历翻译成用人方能够理解的能力证据。', 'Translate learning and experience into capability evidence employers can understand.'),
    intro: t('聚焦职业定位、简历、面试与学习—职业衔接；不承诺岗位、薪资、签证或录用结果。', 'Focused on positioning, CVs, interviews and study-to-career transition; no job, salary, visa or hiring outcome is guaranteed.'),
    audience: [t('准备实习或毕业求职的学生', 'Students preparing for internships or graduate roles'), t('希望转换行业或专业方向的职场新人', 'Early-career professionals changing sector or function'), t('需要梳理跨境发展路径的人才', 'Talent planning a cross-border development pathway')],
    process: [
      { title: t('能力盘点', 'Capability map'), body: t('从课程、项目、研究和工作中识别可验证能力。', 'Identify verifiable capabilities from study, projects, research and work.') },
      { title: t('目标定位', 'Role positioning'), body: t('理解岗位任务、行业语言与能力差距。', 'Understand role tasks, sector language and capability gaps.') },
      { title: t('材料与表达', 'Materials and narrative'), body: t('形成真实、精确、可追问的简历和面试表达。', 'Build truthful, precise and interview-ready materials.') },
      { title: t('行动计划', 'Action plan'), body: t('安排申请、补足证据、复盘和下一阶段学习。', 'Plan applications, evidence-building, review and next-stage learning.') },
    ],
    advantages: [
      { title: t('以任务为中心', 'Task-centred'), body: t('围绕真实岗位任务说明能力，而非堆砌形容词。', 'Explain capability through real role tasks, not adjectives.') },
      { title: t('跨文化表达', 'Cross-cultural communication'), body: t('调整信息密度与语境，但不改变事实。', 'Adapt density and context without changing facts.') },
      { title: t('结果边界', 'Outcome boundaries'), body: t('不暗示招聘方关系或保证录用。', 'No implied employer relationship or hiring guarantee.') },
    ],
    relatedCases: [
      { title: t('学习—职业叙事的证据结构', 'Evidence structure for study-to-career narratives'), meta: t('能力盘点 · 简历 · 面试', 'Capability map · CV · Interview'), href: '/cases/#year-analysis' },
      { title: t('海外短期实习项目', 'International short internship'), meta: t('15—20 天 · 以主办方确认为准', '15–20 days · Subject to host confirmation'), href: '/programmes/internships/' },
    ],
    faq: [
      { question: t('是否提供工作内推？', 'Do you provide referrals?'), answer: t('只有在具体雇主正式授权并确认岗位时才会说明；一般服务不包含内推。', 'Only where a specific employer has formally authorised and confirmed a role; standard support does not include referrals.') },
      { question: t('是否能保证获得签证或工作？', 'Can you guarantee a visa or job?'), answer: t('不能。签证由主管机关决定，录用由雇主决定。', 'No. Visa decisions belong to the authority and hiring decisions to the employer.') },
    ],
  },
  immersion: {
    section: t('国际游学项目 / 01', 'GLOBAL STUDY PROGRAMMES / 01'), title: t('新加坡全真课堂', 'Singapore Immersion Classroom'),
    proposition: t('让课堂、校园、企业与城市成为同一条学习路径。', 'Connect classroom, campus, industry and city into one learning pathway.'),
    intro: t('适合中学生、大学生或定制学生团体。示例周期为 7—14 天；主题、导师、学校、企业与日程均以正式确认方案为准。', 'For secondary, university or custom student groups. Illustrative duration is 7–14 days; themes, faculty, institutions, companies and schedule remain subject to the confirmed proposal.'),
    audience: [t('希望体验新加坡学习环境的学生团体', 'Student groups seeking Singapore learning exposure'), t('需要人工智能、可持续发展或科学技术工程与数学主题项目的学校', 'Schools seeking AI, sustainability or STEM programmes'), t('希望形成团队展示与反思成果的组织者', 'Organisers requiring team presentation and reflection outcomes')],
    process: [
      { title: t('目标与对象', 'Purpose and cohort'), body: t('明确年龄、人数、学习目标、语言与安全要求。', 'Define age, cohort size, learning outcomes, language and safety needs.') },
      { title: t('课程与场景', 'Curriculum and context'), body: t('组合讲座、工作坊、校园、企业与城市任务。', 'Combine lectures, workshops, campus, industry and city tasks.') },
      { title: t('行前与实施', 'Preparation and delivery'), body: t('完成行前说明、接待、风险和现场协调。', 'Complete briefing, hosting, risk and on-site coordination.') },
      { title: t('成果与复盘', 'Output and review'), body: t('以展示、报告或反思记录项目学习成果。', 'Capture learning through presentation, report or reflection.') },
    ],
    advantages: [
      { title: t('学习目标先行', 'Learning-led'), body: t('参访服务于主题与任务，不以打卡替代学习。', 'Visits serve the theme and tasks rather than replace learning.') },
      { title: t('确认后发布', 'Confirmation-gated'), body: t('未正式确认的院校、讲者或企业不作为既定安排宣传。', 'Unconfirmed institutions, speakers or companies are not marketed as fixed.') },
      { title: t('全过程边界', 'Delivery boundaries'), body: t('方案写明责任、包含项、排除项与变更机制。', 'Proposals state responsibilities, inclusions, exclusions and change control.') },
    ],
    relatedCases: [
      { title: t('四川大学—新加坡暑期项目', 'Sichuan University–Singapore summer programme'), meta: t('2019 · 历史项目记录', '2019 · Historical programme record'), href: '/partnerships/#experience' },
      { title: t('年度项目结构分析', 'Annual project-mix analysis'), meta: t('2016—2026 · 600+ 团队项目量级（保守估算）', '2016–2026 · 600+ team projects, conservatively estimated'), href: '/cases/#year-analysis' },
    ],
    faq: [
      { question: t('页面中的学校和企业是否已经确认？', 'Are institutions and companies already confirmed?'), answer: t('只有最终方案中书面确认的资源才构成安排；历史名称不代表当前授权。', 'Only resources confirmed in the final written proposal form part of the programme; historical names do not imply current authorisation.') },
      { question: t('能否按主题定制？', 'Can the programme be customised?'), answer: t('可以，需结合人数、年龄、周期、预算和可用资源设计。', 'Yes, subject to cohort, age, duration, budget and available resources.') },
    ],
  },
  internships: {
    section: t('国际游学项目 / 02', 'GLOBAL STUDY PROGRAMMES / 02'), title: t('海外短期实习', 'International Short Internship'),
    proposition: t('在合法、真实、可监督的任务中理解职业环境。', 'Understand professional environments through lawful, authentic and supervised tasks.'),
    intro: t('示例周期为 15—20 天，适用于满足当地法律、签证、保险、年龄与主办方要求的参与者。岗位、任务和证明以主办方书面确认为准。', 'Illustrative duration is 15–20 days, for participants meeting local legal, visa, insurance, age and host requirements. Roles, tasks and completion evidence are subject to written host confirmation.'),
    audience: [t('希望了解职业场景的大学生与职场新人', 'University students and early-career participants seeking workplace exposure'), t('能够满足签证、年龄、保险与主办方条件的参与者', 'Participants able to meet visa, age, insurance and host requirements'), t('重视任务成果而非“实习包装”的学生', 'Students prioritising authentic tasks over credential packaging')],
    process: [
      { title: t('资格核对', 'Eligibility'), body: t('核对法律、签证、年龄、语言、保险与主办方要求。', 'Check law, visa, age, language, insurance and host requirements.') },
      { title: t('任务匹配', 'Task matching'), body: t('明确岗位场景、任务、监督人和预期产出。', 'Define context, tasks, supervisor and expected output.') },
      { title: t('现场实施', 'Supervised delivery'), body: t('进行安全说明、任务记录、反馈和问题升级。', 'Provide safety briefing, task records, feedback and escalation.') },
      { title: t('成果复盘', 'Outcome review'), body: t('整理展示、反思或主办方确认的完成记录。', 'Compile presentation, reflection or host-confirmed completion record.') },
    ],
    advantages: [
      { title: t('合法合规优先', 'Compliance first'), body: t('不会用培训或参访名称规避适用法律。', 'Programme labels are not used to bypass applicable law.') },
      { title: t('任务真实', 'Authentic tasks'), body: t('任务、监督与产出在开始前确认。', 'Tasks, supervision and outputs are confirmed before commencement.') },
      { title: t('不承诺就业', 'No hiring promise'), body: t('短期经历不构成就业、薪资或签证承诺。', 'Short-term exposure does not guarantee employment, salary or visa outcomes.') },
    ],
    relatedCases: [
      { title: t('职业与人才发展服务', 'Career & talent development'), meta: t('定位 · 简历 · 面试', 'Positioning · CV · Interview'), href: '/services/career/' },
      { title: t('国际项目设计边界', 'Programme-design boundaries'), meta: t('确认 · 风险 · 复盘', 'Confirmation · Risk · Review'), href: '/programmes/#architecture' },
    ],
    faq: [
      { question: t('是否保证岗位和实习证明？', 'Are placement and certificates guaranteed?'), answer: t('只有主办方书面确认后才成立；网站描述不是岗位或证明承诺。', 'Only after written host confirmation; website copy is not a placement or certificate promise.') },
      { question: t('是否等同于受雇工作？', 'Is this paid employment?'), answer: t('不一定。具体性质、报酬、签证与保险须按主办方和适用法规确认。', 'Not necessarily. Status, compensation, visa and insurance depend on the host and applicable law.') },
    ],
  },
  training: {
    institutional: true,
    section: t('院校与机构合作 / 04', 'INSTITUTIONAL PARTNERSHIPS / 04'), title: t('机构培训与研修', 'Institutional Training & Study Visits'),
    proposition: t('把机构目标转化为有治理、有产出、可复盘的研修项目。', 'Translate institutional objectives into governed, outcome-led and reviewable programmes.'),
    intro: t('面向院校、企业与公共机构，可围绕城市治理、安全环境健康与消防、工程生产力、创新和领导力设计新加坡研修。主题、专家、参访单位和费用须在正式方案中确认。', 'For universities, companies and public bodies, with Singapore programmes in governance, safety, environment, health and fire, engineering productivity, innovation and leadership. Themes, experts, hosts and fees require confirmation in the formal proposal.'),
    audience: [t('需要海外能力建设项目的院校与企业', 'Universities and companies seeking overseas capability programmes'), t('希望开展新加坡专题研修的公共机构', 'Public bodies planning Singapore-focused study visits'), t('需要明确成果、治理和复盘机制的项目负责人', 'Programme owners requiring outputs, governance and review')],
    process: [
      { title: t('需求与治理', 'Needs and governance'), body: t('确认目标、对象、决策人、预算框架和合规边界。', 'Confirm objectives, audience, decision-makers, budget frame and compliance boundaries.') },
      { title: t('方案与资源', 'Design and resources'), body: t('设计主题、课程、专家、参访、产出和替代方案。', 'Design theme, curriculum, experts, visits, outputs and contingencies.') },
      { title: t('书面确认', 'Written confirmation'), body: t('经相关机构确认日程、责任、费用与变更机制。', 'Confirm schedule, responsibilities, fees and change process in writing.') },
      { title: t('实施与复盘', 'Delivery and review'), body: t('管理现场实施、参与反馈、成果记录与后续行动。', 'Manage delivery, feedback, outcome records and follow-up actions.') },
    ],
    advantages: [
      { title: t('机构级治理', 'Institutional governance'), body: t('以双方联络人、节点、批准与变更记录管理项目。', 'Manage liaisons, milestones, approvals and changes.') },
      { title: t('内容可定制', 'Custom content'), body: t('从组织目标和参训人群出发设计，不套用固定行程。', 'Design from organisational goals and cohort needs, not a fixed itinerary.') },
      { title: t('合作边界透明', 'Transparent boundaries'), body: t('历史项目不代表当前院校、专家或机构授权。', 'Historical activity does not imply current institutional or expert authorisation.') },
    ],
    relatedCases: [
      { title: t('同济—南洋理工研究生论坛', 'Tongji–NTU postgraduate forum'), meta: t('2019 · 历史协调记录', '2019 · Historical coordination record'), href: '/partnerships/#experience' },
      { title: t('院校合作运行机制', 'Institutional operating model'), meta: t('对齐 · 确认 · 治理 · 复盘', 'Alignment · Confirmation · Governance · Review'), href: '/partnerships/#process' },
    ],
    faq: [
      { question: t('页面主题是否等于已确认课程？', 'Are listed themes confirmed courses?'), answer: t('不是。它们是能力方向示例，最终课程与资源以双方书面方案为准。', 'No. They are capability examples; curriculum and resources follow the agreed written proposal.') },
      { question: t('能否出具证书？', 'Can certificates be issued?'), answer: t('只有发证主体、条件与文本正式确认后才会列入方案，不预先承诺。', 'Only after issuer, criteria and wording are formally confirmed; certification is not promised in advance.') },
    ],
  },
};
