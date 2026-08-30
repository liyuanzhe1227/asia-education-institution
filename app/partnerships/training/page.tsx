import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '机构培训与研修', description: '面向院校、企业与公共机构的新加坡定制培训、研修与能力建设项目。', alternates: { canonical: '/partnerships/training/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.training} />; }
