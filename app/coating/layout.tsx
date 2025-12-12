import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '각종코팅 서비스',
    description:
        '오래 지속되는 보호막으로 공간의 가치를 높입니다. 대리석코팅, 마루코팅, 욕실코팅 전문 서비스. 스크래치 방지 및 광택 복원.',
    keywords: [
        '각종코팅',
        '대리석코팅',
        '마루코팅',
        '욕실코팅',
        '바닥코팅',
        '코팅서비스',
        '코팅업체',
        '광명코팅',
        '경기도코팅',
        '프리미엄코팅',
    ],
    openGraph: {
        title: '각종코팅 서비스 | 청결',
        description:
            '오래 지속되는 보호막으로 공간의 가치를 높입니다. 대리석코팅, 마루코팅, 욕실코팅 전문 서비스.',
        url: '/coating',
        type: 'website',
    },
    alternates: {
        canonical: '/coating',
    },
};

export default function CoatingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
