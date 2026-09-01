import type { Metadata } from 'next';
export const metadata: Metadata = { title: '关于 AEI', description: 'AEI 新加坡注册信息、跨国协作网络、项目责任结构、服务原则与咨询方式。', alternates: { canonical: '/about/' } };
export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
