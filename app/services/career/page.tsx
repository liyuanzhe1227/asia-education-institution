import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '职业与人才发展', description: '能力盘点、职业定位、简历、面试与跨境发展准备。', alternates: { canonical: '/services/career/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.career} />; }
