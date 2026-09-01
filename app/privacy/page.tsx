'use client';

import { useLanguage } from '../components/LanguageProvider';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const sections = [
    [tr('信息收集', 'Information collection'), tr('本静态网站不设置账户，也不在网站服务器保存咨询表单。提交咨询会打开您的邮件应用，由您确认后发送。', 'This static website has no user accounts and does not store enquiry-form content on a website server. Submission opens your email app for your review and sending.')],
    [tr('咨询信息', 'Enquiry information'), tr('AEI 仅将您主动发送的姓名、联系方式与需求说明用于回复咨询、确认范围与后续沟通。请勿在首次联系中发送证件号码、健康资料、完整成绩单或其他非必要敏感信息。', 'AEI uses the name, contact details and request you voluntarily send to respond, define scope and communicate. Do not send ID numbers, health data, full transcripts or unnecessary sensitive information in the first contact.')],
    [tr('案例、证据与综合示例', 'Cases, evidence and composite scenarios'), tr('历史档案案例移除姓名、申请编号、联系方式及可直接识别个人的信息。标注为“综合示例”或“典型情境”的内容由多类常见需求组合而成，不对应任何真实客户、录取、奖项或出版结果。两类内容均不构成院校背书或未来结果承诺。', 'Historical archive cases remove names, application numbers, contact details and directly identifying information. Content labelled “composite scenario” or “illustrative scenario” combines common needs and does not represent any real client, admission, award or publication outcome. Neither category implies institutional endorsement or future outcomes.')],
    [tr('团队与协作网络', 'Team and collaboration network'), tr('公开姓名来自机构提供的协作网络名单。个人学历、现任职务、专业头衔、资质与项目履历，仅在本人授权并完成事实核验后发布；具体项目参与人员以书面确认文件为准。', 'Published names come from an organisation-provided collaboration roster. Education, current roles, professional titles, credentials and project histories are published only after consent and factual verification; actual project participation follows the written engagement confirmation.')],
    [tr('第三方链接', 'Third-party links'), tr('网站可能链接至 ACRA、研究论文或历史项目记录。第三方网站的内容、隐私实践与可用性由相应提供方负责。', 'The site may link to ACRA, research papers or historical programme records. Third-party content, privacy practices and availability remain the responsibility of the relevant provider.')],
    [tr('结果与责任边界', 'Outcome and responsibility boundaries'), tr('历史录取、项目、就业或研究记录不构成未来录取、签证、永居、公民身份、就业、发表或商业结果承诺。移民法律意见及受监管代理工作须由相应法域持牌人士提供，具体服务范围与责任以正式书面确认为准。', 'Past admission, programme, employment or research records do not guarantee future admission, visa, permanent residence, citizenship, employment, publication or commercial outcomes. Immigration legal advice and regulated representation require appropriately licensed professionals; scope and responsibilities follow the formal written agreement.')],
    [tr('联系与更正', 'Contact and correction'), tr('如需查询、更正或删除您曾主动发送给 AEI 的个人信息，请联系 eric2015aei@gmail.com 或 +65 8626 7896。', 'To enquire about, correct or request deletion of personal information you have sent to AEI, contact eric2015aei@gmail.com or +65 8626 7896.')],
  ];
  return <main><section className="inner-hero about-hero"><p>{tr('07 / 隐私与网站使用说明', '07 / PRIVACY & WEBSITE TERMS')}</p><h1>{tr('隐私与网站说明', 'Privacy & Website Notice')}</h1><div><strong>{tr('最少收集，明确用途，保护身份。', 'Data minimisation, clear purpose and identity protection.')}</strong><span>{tr('版本日期：2026 年 9 月 1 日。', 'Version date: 1 September 2026.')}</span></div></section><section className="policy-content">{sections.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section></main>;
}
