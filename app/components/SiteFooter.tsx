'use client';
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from './LanguageProvider';
import { assetPath } from '../lib/site-data';

export function SiteFooter() {
  const { lang } = useLanguage();
  return (
    <footer className="lux-footer">
      <div className="footer-lead">
        <div className="footer-logo"><img src={assetPath('aei-mark.jpg')} alt={lang === 'zh' ? '亚瑟（新加坡）教育学院' : 'Asia Education Institution'} /></div>
        <h2>{lang === 'zh' ? '把下一步，变成一条清晰的路径。' : 'Turn the next step into a clear pathway.'}</h2>
        <a href="tel:+6586267896">+65 8626 7896 <span>↗</span></a>
      </div>
      <div className="footer-links">
        <div><small>{lang === 'zh' ? '网站导航' : 'Navigate'}</small><a href="/china/">{lang === 'zh' ? '中国家庭与全龄教育' : 'China Family & All-stage Education'}</a><a href="/services/">{lang === 'zh' ? '个人成长服务' : 'Personal Services'}</a><a href="/mobility/">{lang === 'zh' ? '签证、永居与身份规划' : 'Visa, Residence & Citizenship'}</a><a href="/cases/">{lang === 'zh' ? '案例中心' : 'Case Library'}</a><a href="/programmes/">{lang === 'zh' ? '国际游学项目' : 'Study Programmes'}</a></div>
        <div><small>{lang === 'zh' ? '合作与机构' : 'Institutional'}</small><a href="/partnerships/">{lang === 'zh' ? '院校与机构合作' : 'Institutional Partnerships'}</a><a href="/evidence/">{lang === 'zh' ? '证据与透明度' : 'Evidence & Transparency'}</a><a href="/about/">{lang === 'zh' ? '关于 AEI' : 'About AEI'}</a><a href="/privacy/">{lang === 'zh' ? '隐私与网站说明' : 'Privacy Notice'}</a></div>
      </div>
      <div className="footer-legal">
        <p>{lang === 'zh' ? '历史案例基于现有档案或正式确认信息；典型情境与综合示例均明确标注，不代表真实客户结果。个案背景与结果不构成对未来录取、竞赛、签证、就业或发表的承诺。法律意见和受监管代理工作须由相应法域持牌人士提供。' : 'Historical cases are based on existing archives or formally confirmed information; illustrative and composite scenarios are clearly labelled and do not represent real client outcomes. Past results do not guarantee admission, competition, visa, employment or publication outcomes. Legal advice and regulated representation require appropriately licensed professionals.'}</p>
        <small>© {new Date().getFullYear()} ASIA EDUCATION INSTITUTION PTE. LTD. · UEN 201510068D</small>
      </div>
    </footer>
  );
}
