import type { Metadata } from 'next';
export const metadata: Metadata = { title: '院校与机构合作', description: '学生流动、联合培养、科研交流、合作备忘录与机构研修。', alternates: { canonical: '/partnerships/' } };
export default function PartnershipsLayout({ children }: { children: React.ReactNode }) { return children; }
