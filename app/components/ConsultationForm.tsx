'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export function ConsultationForm() {
  const { lang } = useLanguage();
  const tr = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const [sent, setSent] = useState(false);
  const audienceOptions = [
    tr('学生 / 家长', 'Student / Parent'),
    tr('研究者 / 职场人士', 'Researcher / Professional'),
    tr('院校 / 企业 / 公共机构', 'University / Company / Public body'),
  ];
  const serviceOptions = [
    tr('升学与申请', 'Admissions'),
    tr('学术与研究', 'Academic & Research'),
    tr('职业发展', 'Career Development'),
    tr('签证 / 永居 / 人才 / 公民身份', 'Visa / Residence / Talent / Citizenship'),
    tr('国际游学 / 实习', 'Study Programme / Internship'),
    tr('院校合作 / 机构研修', 'Partnership / Institutional Training'),
  ];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `${tr('姓名', 'Name')}: ${form.get('name')}`,
      `${tr('联系方式', 'Contact')}: ${form.get('contact')}`,
      `${tr('咨询身份', 'Enquirer type')}: ${form.get('audience')}`,
      `${tr('关注服务', 'Service')}: ${form.get('service')}`,
      `${tr('意向国家或地区', 'Destination')}: ${form.get('destination') || tr('未填写', 'Not specified')}`,
      '',
      `${tr('需求说明', 'Message')}:`,
      String(form.get('message') ?? ''),
    ].join('\n');
    const subject = encodeURIComponent(`AEI ${tr('网站咨询', 'website enquiry')} · ${form.get('service')}`);
    window.location.href = `mailto:eric2015aei@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return <form className="consultation-form" onSubmit={submit}>
    <div><label>{tr('姓名', 'Name')}<input name="name" required autoComplete="name" /></label><label>{tr('电话或邮箱', 'Phone or email')}<input name="contact" required autoComplete="email" /></label></div>
    <fieldset className="segmented-field"><legend>{tr('咨询身份', 'Enquirer type')}</legend><div className="segment-options audience-options">{audienceOptions.map((option) => <label className="segment-option" key={option}><input type="radio" name="audience" value={option} required /><span>{option}</span></label>)}</div></fieldset>
    <fieldset className="segmented-field"><legend>{tr('关注服务', 'Service')}</legend><div className="segment-options service-options">{serviceOptions.map((option) => <label className="segment-option" key={option}><input type="radio" name="service" value={option} required /><span>{option}</span></label>)}</div></fieldset>
    <label>{tr('意向国家或地区（如适用）', 'Destination, if applicable')}<input name="destination" placeholder={tr('例如：新加坡、英国、加拿大；或“尚未确定”', 'For example: Singapore, UK, Canada; or “not decided”')} /></label>
    <label>{tr('需求说明', 'Message')}<textarea name="message" rows={5} required placeholder={tr('请说明目标、时间、当前情况和希望解决的问题。请勿提交证件号码、成绩单或其他敏感文件。', 'Please describe your goal, timing, current position and key question. Do not submit ID numbers, transcripts or sensitive files.')} /></label>
    <label className="consent"><input type="checkbox" required />{tr('我同意 AEI 使用上述信息回复本次咨询，并已阅读隐私说明。', 'I consent to AEI using this information to respond to this enquiry and have read the privacy notice.')}</label>
    <button type="submit">{tr('通过邮件发送咨询', 'Send enquiry by email')} ↗</button>
    <small>{sent ? tr('已打开您的邮件应用，请检查内容后发送。', 'Your email app has opened; please review and send.') : tr('提交后将打开您的邮件应用；网站不会在服务器保存本表单。', 'Submitting opens your email app; this website does not store the form on a server.')}</small>
  </form>;
}
