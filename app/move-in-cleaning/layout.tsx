import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '입주청소 · 이사청소',
    description:
        '새 집에서의 첫 날이 가장 행복한 기억이 되도록. 입주청소, 이사청소 전문 서비스. 친환경 세제 사용, 보이지 않는 곳까지 정성을 담아 청소해드립니다.',
    keywords: [
        '입주청소',
        '이사청소',
        '새집청소',
        '입주청소업체',
        '이사청소업체',
        '광명입주청소',
        '경기도입주청소',
        '친환경청소',
        '프리미엄입주청소',
    ],
    openGraph: {
        title: '입주청소 · 이사청소 | 청결',
        description:
            '새 집에서의 첫 날이 가장 행복한 기억이 되도록. 입주청소, 이사청소 전문 서비스.',
        url: '/move-in-cleaning',
        type: 'website',
    },
    alternates: {
        canonical: '/move-in-cleaning',
    },
};

export default function MoveInCleaningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
