import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '学术与研究发展', description: '研究型申请、研究计划、方法设计与学术表达支持，遵循学术诚信边界。', alternates: { canonical: '/services/research/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.research} />; }
