'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
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
        <div><small>{lang === 'zh' ? '网站导航' : 'Navigate'}</small><Link href="/services/">{lang === 'zh' ? '个人成长服务' : 'Personal Services'}</Link><Link href="/mobility/">{lang === 'zh' ? '签证、永居与身份规划' : 'Visa, Residence & Citizenship'}</Link><Link href="/cases/">{lang === 'zh' ? '案例中心' : 'Case Library'}</Link><Link href="/programmes/">{lang === 'zh' ? '国际游学项目' : 'Study Programmes'}</Link></div>
        <div><small>{lang === 'zh' ? '合作与机构' : 'Institutional'}</small><Link href="/partnerships/">{lang === 'zh' ? '院校与机构合作' : 'Institutional Partnerships'}</Link><Link href="/evidence/">{lang === 'zh' ? '证据与透明度' : 'Evidence & Transparency'}</Link><Link href="/about/">{lang === 'zh' ? '关于 AEI' : 'About AEI'}</Link><Link href="/privacy/">{lang === 'zh' ? '隐私与网站说明' : 'Privacy Notice'}</Link></div>
      </div>
      <div className="footer-legal">
        <p>{lang === 'zh' ? '所有项目、录取案例与合作安排均基于历史档案或正式确认信息。个案背景与结果不构成对未来录取、签证、永居、公民身份、就业或发表结果的承诺。移民相关法律意见和受监管代理工作须由相应法域持牌人士提供。' : 'Programmes, cases and partnerships are presented from archived or formally confirmed information. Past outcomes do not guarantee admission, visa, permanent residence, citizenship, employment or publication results. Immigration legal advice and regulated representation must be provided by appropriately licensed professionals.'}</p>
        <small>© {new Date().getFullYear()} ASIA EDUCATION INSTITUTION PTE. LTD. · UEN 201510068D</small>
      </div>
    </footer>
  );
}
