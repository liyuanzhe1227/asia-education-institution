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
  description: '新加坡注册的跨国教育服务平台，为中国家庭提供幼儿园至硕博升学、竞赛科研、论文出版、国际项目与全球流动规划。',
  keywords: ['AEI', 'Asia Education Institution', '中国家庭教育规划', '新加坡教育', '幼儿园申请', '小学申请', '国际高中', '本科申请', '硕士申请', '博士申请', '机器人比赛', '奥林匹克数学', '论文发表', '专著出版', '国际游学', '院校合作', '签证规划', '永久居民', '人才项目', '公民申请'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AEI｜连接教育、研究与发展机遇',
    description: '面向中国家庭、学生、研究者与机构，连接全龄升学、竞赛科研、国际项目和全球流动的跨国服务体系。',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'AEI 国际学习项目' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEI｜亚瑟（新加坡）教育学院',
    description: '中国家庭服务、新加坡项目管理与全球教育资源协作。',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" data-lang="zh">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'EducationalOrganization',
          name: 'Asia Education Institution Pte. Ltd.', alternateName: 'AEI',
          identifier: 'UEN 201510068D', foundingDate: '2015-04-15',
          url: 'https://liyuanzhe1227.github.io/asia-education-institution/',
          email: 'eric2015aei@gmail.com', telephone: '+65 8626 7896',
          address: { '@type': 'PostalAddress', streetAddress: '732 Tampines Street 71', addressLocality: 'Singapore', postalCode: '520732', addressCountry: 'SG' },
          sameAs: ['https://www.instagram.com/asiaeducationinstitution/'],
        }) }} />
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
