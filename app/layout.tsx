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
  keywords: ['AEI', 'Asia Education Institution', '新加坡教育', '硕士申请', '博士申请', '国际游学', '院校合作'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'EducationalOrganization',
          name: 'Asia Education Institution Pte. Ltd.', alternateName: 'AEI',
          identifier: 'UEN 201510068D', foundingDate: '2015-04-15',
          url: 'https://liyuanzhe1227.github.io/asia-education-institution/',
          email: 'eric2015aei@gmail.com', telephone: '+65 8626 7896',
          address: { '@type': 'PostalAddress', streetAddress: '732 Tampines Street 71, #02-111', addressLocality: 'Singapore', postalCode: '520732', addressCountry: 'SG' },
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
