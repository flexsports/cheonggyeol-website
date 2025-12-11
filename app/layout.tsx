import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

export const metadata: Metadata = {
  title: '입주청소 전문기업 | 청결',
  description: '청소에 프리미엄을 더하다. 입주청소 전문기업 청결입니다.',
  openGraph: {
    title: '입주청소 전문기업 | 청결',
    description: '청소에 프리미엄을 더하다. 입주청소 전문기업 청결입니다.',
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
    description: '청소에 프리미엄을 더하다. 입주청소 전문기업 청결입니다.',
    images: ['/cheonggyeol_img_open_graph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='antialiased min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
