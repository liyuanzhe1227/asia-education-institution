import type { Metadata } from 'next';
export const metadata: Metadata = { title: '案例与数据中心', description: 'AEI 历史档案案例、全龄教育综合情境、历年项目量级与结果证据边界。', alternates: { canonical: '/cases/' } };
export default function CasesLayout({ children }: { children: React.ReactNode }) { return children; }
