import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageProvider';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS === 'true'
      ? 'https://liyuanzhe1227.github.io/asia-education-institution/'
      : 'https://aei-global-education.liyuanzhe1227.chatgpt.site',
  ),
  title: {
    default: 'AEI｜亚瑟（新加坡）教育学院',
    template: '%s | AEI',
  },
  description: '立足新加坡的升学申请、研究发展、国际学习项目与院校合作平台。',
  openGraph: {
    title: 'AEI｜连接教育、研究与发展机遇',
    description: '面向学生、研究者、院校与机构的六条完整业务路径。',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'AEI 国际学习项目' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEI｜亚瑟（新加坡）教育学院',
    description: '连接教育、研究与跨境发展机遇。',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
