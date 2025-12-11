'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// Phone Button Component
function PhoneButton() {
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = '010-2880-1814';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md 브레이크포인트 (768px)
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 모바일이면 기본 동작(tel: 링크) 실행
    if (isMobile) {
      return; // Link의 기본 동작 허용
    }

    // PC에서는 기본 동작 방지하고 toast 표시
    e.preventDefault();
    toast.success(`전화번호: ${phoneNumber}`, {
      duration: 4000,
      iconTheme: {
        primary: '#22c55e', // 초록색
        secondary: '#fff',
      },
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#333',
        fontSize: '16px',
        padding: '16px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    });
  };

  return (
    <Link
      href='tel:010-2880-1814'
      onClick={handlePhoneClick}
      className='w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95'
      aria-label='전화하기'
    >
      <div className='relative w-10 h-10 md:w-14 md:h-14'>
        <Image src='/phone_icon.svg' alt='전화 아이콘' fill className='object-contain' />
      </div>
    </Link>
  );
}

// 미래 사용을 위한 카카오톡 버튼 컴포넌트 (현재 주석처리)
// function KakaoButton() {
//   return (
//     <Link
//       href='https://open.kakao.com/o/example'
//       target='_blank'
//       rel='noopener noreferrer'
//       className='w-10 h-10 md:w-14 md:h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95'
//       aria-label='카카오톡 상담하기'
//     >
//       <div className='relative w-7 h-7 md:w-9 md:h-9 md:mt-0.5'>
//         <Image src='/kakao_icon.svg' alt='카카오톡 아이콘' fill className='object-contain' />
//       </div>
//     </Link>
//   );
// }

// Main FloatingButton Component
export default function FloatingButton() {
  return (
    <div className='fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col md:gap-2 gap-1'>
      <PhoneButton />
      {/* 미래 사용을 위한 카카오톡 버튼 (현재 주석처리) */}
      {/* <KakaoButton /> */}
    </div>
  );
}
