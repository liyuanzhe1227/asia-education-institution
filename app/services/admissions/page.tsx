import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '升学与申请', description: '硕士、博士、跨专业及特殊背景申请的定位、材料、面试与递交管理。', alternates: { canonical: '/services/admissions/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.admissions} />; }
