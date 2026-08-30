import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://liyuanzhe1227.github.io/asia-education-institution/'),
  title: 'AEI | Asia Education Institution · 亚瑟（新加坡）教育学院',
  description: 'A bilingual Singapore platform connecting admissions, research, global programmes, institutional partnerships, career development and executive learning.',
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
      <body>{children}</body>
    </html>
  );
}
