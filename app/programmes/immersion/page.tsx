import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '新加坡全真课堂', description: '连接课程、校园、企业、城市任务与成果展示的新加坡定制学习项目。', alternates: { canonical: '/programmes/immersion/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.immersion} />; }
