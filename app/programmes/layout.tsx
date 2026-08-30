import type { Metadata } from 'next';
export const metadata: Metadata = { title: '国际游学项目', description: '新加坡全真课堂、短期学术营训与海外短期实习项目。', alternates: { canonical: '/programmes/' } };
export default function ProgrammesLayout({ children }: { children: React.ReactNode }) { return children; }
