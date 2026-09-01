import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中国家庭与全龄教育服务',
  description: '面向中国家庭，从幼儿园、小学、初高中到大学、硕博、竞赛、科研与跨国发展的一体化教育路径。',
  alternates: { canonical: '/china/' },
};

export default function ChinaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
