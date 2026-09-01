import type { Metadata } from 'next';
import { DetailPageTemplate } from '../../components/DetailPageTemplate';
import { detailPages } from '../../lib/detail-data';
export const metadata: Metadata = { title: '升学与申请', description: '从幼儿园、小学、初高中到本科、硕士和博士的全龄教育路径、选校、材料、面试与递交管理。', alternates: { canonical: '/services/admissions/' } };
export default function Page() { return <DetailPageTemplate data={detailPages.admissions} />; }
