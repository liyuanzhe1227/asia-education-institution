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
    default: 'AEI | Asia Education Institution · 亚瑟（新加坡）教育学院',
    template: '%s | AEI',
  },
  description: '新加坡双语教育、升学申请、研究发展、国际项目与院校合作平台。A bilingual Singapore platform for admissions, research, global programmes and partnerships.',
  openGraph: {
    title: 'AEI | Connecting education, research and opportunity',
    description: 'Six connected pathways for students, scholars, universities and organisations.',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'AEI global learning programme' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEI | Asia Education Institution',
    description: 'Education, research and opportunity — connected across borders.',
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
