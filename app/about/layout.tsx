import type { Metadata } from 'next';
export const metadata: Metadata = { title: '关于 AEI · About', description: 'Asia Education Institution 自 2015 年立足新加坡，提供双语教育与跨境合作服务。' };
export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
