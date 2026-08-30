import type { Metadata } from 'next';
export const metadata: Metadata = { title: '证据与透明度中心', description: 'AEI 公司登记、案例统计方法、匿名录取结果样本与外部公开记录。', alternates: { canonical: '/evidence/' } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
