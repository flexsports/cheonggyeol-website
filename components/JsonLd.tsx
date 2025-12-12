export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.xn--p89ao90bble4rb9wiba.com',
        name: '청결',
        alternateName: '입주청소전문기업 청결',
        description:
            '청소에 프리미엄을 더하다. 입주청소, 이사청소, 사무실청소, 준공청소, 각종코팅, 줄눈시공 전문기업입니다.',
        url: 'https://www.xn--p89ao90bble4rb9wiba.com',
        telephone: '+82-10-2880-1814',
        email: 'cjdruf1814@naver.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '소하로190 광명G타워 A동 1005호',
            addressLocality: '광명시',
            addressRegion: '경기도',
            postalCode: '14348',
            addressCountry: 'KR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 37.4478,
            longitude: 126.8842,
        },
        areaServed: {
            '@type': 'Country',
            name: '대한민국',
        },
        serviceType: [
            '입주청소',
            '이사청소',
            '사무실청소',
            '준공청소',
            '거주청소',
            '각종코팅',
            '줄눈시공',
            '대리석코팅',
            '마루코팅',
            '욕실코팅',
        ],
        priceRange: '₩₩',
        image: 'https://www.xn--p89ao90bble4rb9wiba.com/cheonggyeol_img_open_graph.png',
        logo: 'https://www.xn--p89ao90bble4rb9wiba.com/logo.png',
        sameAs: [],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
        },
    };

    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
