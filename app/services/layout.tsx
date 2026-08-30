import type { Metadata } from 'next';
export const metadata: Metadata = { title: '个人成长服务', description: 'AEI 升学申请、学术研究与职业人才三条个人成长服务路径。', alternates: { canonical: '/services/' } };
export default function ServicesLayout({ children }: { children: React.ReactNode }) { return children; }
