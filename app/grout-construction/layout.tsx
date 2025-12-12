import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '줄눈시공',
    description:
        '깔끔하고 위생적인 줄눈 시공으로 공간을 새롭게. 욕실 줄눈, 거실 줄눈, 베란다 줄눈 시공. 물때와 곰팡이 방지를 위한 프리미엄 줄눈 시공 서비스.',
    keywords: [
        '줄눈시공',
        '욕실줄눈',
        '거실줄눈',
        '베란다줄눈',
        '타일줄눈',
        '줄눈시공업체',
        '광명줄눈시공',
        '경기도줄눈시공',
        '곰팡이방지',
        '물때방지',
    ],
    openGraph: {
        title: '줄눈시공 | 청결',
        description:
            '깔끔하고 위생적인 줄눈 시공으로 공간을 새롭게. 욕실, 거실, 베란다 줄눈 시공 전문.',
        url: '/grout-construction',
        type: 'website',
    },
    alternates: {
        canonical: '/grout-construction',
    },
};

export default function GroutConstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
