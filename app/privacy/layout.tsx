import type { Metadata } from 'next';
export const metadata: Metadata = { title: '隐私与网站使用说明', description: 'AEI 网站咨询、个人信息、案例匿名化与第三方链接说明。', alternates: { canonical: '/privacy/' } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
