import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '사무실청소 · 준공청소',
    description:
        '성공적인 비즈니스를 위한 완벽한 공간 관리. 사무실청소, 준공청소 전문 서비스. 쾌적한 업무 환경 조성, 바닥 왁싱 및 코팅 솔루션 제공.',
    keywords: [
        '사무실청소',
        '준공청소',
        '오피스청소',
        '회사청소',
        '건물청소',
        '바닥왁싱',
        '사무실청소업체',
        '준공청소업체',
        '광명사무실청소',
        '경기도사무실청소',
    ],
    openGraph: {
        title: '사무실청소 · 준공청소 | 청결',
        description:
            '성공적인 비즈니스를 위한 완벽한 공간 관리. 사무실청소, 준공청소 전문 서비스.',
        url: '/office-cleaning',
        type: 'website',
    },
    alternates: {
        canonical: '/office-cleaning',
    },
};

export default function OfficeCleaningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
