import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Toaster from '../components/Toaster';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xn--p89ao90bble4rb9wiba.com'),
  title: {
    default: '입주청소 전문기업 | 청결',
    template: '%s | 청결',
  },
  description:
    '청소에 프리미엄을 더하다. 입주청소, 이사청소, 사무실청소, 준공청소, 각종코팅, 줄눈시공 전문기업 청결입니다. 경기도 광명시 소재.',
  keywords: [
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
    '청소업체',
    '청소전문업체',
    '광명청소',
    '경기도청소',
    '청결',
  ],
  authors: [{ name: '청결' }],
  creator: '청결',
  publisher: '청결',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // 네이버 서치어드바이저에서 발급받은 인증 코드를 여기에 입력하세요
    // other: {
    //   'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE',
    // },
  },
  openGraph: {
    title: '입주청소 전문기업 | 청결',
    description:
      '청소에 프리미엄을 더하다. 입주청소, 이사청소, 사무실청소, 준공청소, 각종코팅, 줄눈시공 전문기업 청결입니다.',
    siteName: '청결',
    images: [
      {
        url: '/cheonggyeol_img_open_graph.png',
        width: 1200,
        height: 600,
        alt: '청결 - 청소에 프리미엄을 더하다',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '입주청소 전문기업 | 청결',
    description:
      '청소에 프리미엄을 더하다. 입주청소, 이사청소, 사무실청소, 준공청소 전문기업 청결입니다.',
    images: ['/cheonggyeol_img_open_graph.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' }],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/favicon.ico', sizes: '48x48' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <JsonLd />
      </head>
      <body className='antialiased min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <FloatingButton />
        <Toaster />
      </body>
    </html>
  );
}
