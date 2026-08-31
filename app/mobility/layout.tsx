import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '全球流动、签证与身份规划',
  description: '面向新加坡、香港、英国、加拿大、澳大利亚、美国、新西兰等目的地的签证、永居、人才项目与公民身份路径初步规划。',
  alternates: { canonical: '/mobility/' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
