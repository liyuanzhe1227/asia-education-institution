import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '海外短期实习', description: '以合法参与、真实任务、主办方确认和过程监督为边界的海外短期实习。', alternates: { canonical: '/programmes/internships/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.internships} />; }
