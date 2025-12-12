import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '거주청소',
    description:
        '현재 거주 중인 공간도 새 집처럼 깨끗하게. 거주청소, 정기청소 전문 서비스. 짐이 있어도 걱정 없는 섬세한 케어를 약속합니다.',
    keywords: [
        '거주청소',
        '정기청소',
        '가정집청소',
        '주거청소',
        '집청소',
        '거주청소업체',
        '광명거주청소',
        '경기도거주청소',
        '프리미엄청소',
    ],
    openGraph: {
        title: '거주청소 | 청결',
        description:
            '현재 거주 중인 공간도 새 집처럼 깨끗하게. 거주청소, 정기청소 전문 서비스.',
        url: '/residential-cleaning',
        type: 'website',
    },
    alternates: {
        canonical: '/residential-cleaning',
    },
};

export default function ResidentialCleaningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
