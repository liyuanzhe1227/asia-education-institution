import type { Metadata } from 'next';
export const metadata: Metadata = { title: '服务中心 · Services', description: 'AEI 六条业务路径：升学申请、学术研究、国际项目、院校合作、职业人才与机构培训。' };
export default function ServicesLayout({ children }: { children: React.ReactNode }) { return children; }
