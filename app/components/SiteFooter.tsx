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
        <div className="footer-logo"><img src={assetPath('aei-mark.jpg')} alt="" /><strong>AEI</strong></div>
        <h2>{lang === 'zh' ? '把下一步，变成一条清晰的路径。' : 'Turn the next step into a clear pathway.'}</h2>
        <a href="tel:+6586267896">+65 8626 7896 <span>↗</span></a>
      </div>
      <div className="footer-links">
        <div><small>{lang === 'zh' ? '网站导航' : 'Navigate'}</small><Link href="/services/">{lang === 'zh' ? '服务中心' : 'Services'}</Link><Link href="/cases/">{lang === 'zh' ? '案例中心' : 'Case Library'}</Link><Link href="/programmes/">{lang === 'zh' ? '国际项目' : 'Programmes'}</Link></div>
        <div><small>{lang === 'zh' ? '合作与机构' : 'Institutional'}</small><Link href="/partnerships/">{lang === 'zh' ? '院校合作' : 'Partnerships'}</Link><Link href="/about/">{lang === 'zh' ? '关于 AEI' : 'About AEI'}</Link><a href="mailto:eric2015aei@gmail.com">Email</a></div>
      </div>
      <div className="footer-legal">
        <p>{lang === 'zh' ? '所有项目、录取案例与合作安排均基于历史档案或正式确认信息。个案背景与结果不构成对未来录取、签证、就业或发表结果的承诺。' : 'Programmes, cases and partnerships are presented from archived or formally confirmed information. Past outcomes do not guarantee admission, visa, employment or publication results.'}</p>
        <small>© {new Date().getFullYear()} Asia Education Institution · Singapore</small>
      </div>
    </footer>
  );
}
