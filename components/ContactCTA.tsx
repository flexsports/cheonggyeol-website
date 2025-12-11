'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
// 미래 사용을 위한 카카오톡 모달 import (현재 주석처리)
// import KakaoModal from './KakaoModal';

export default function ContactCTA() {
  // 미래 사용을 위한 카카오톡 관련 코드 (현재 주석처리)
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const kakaoId = 'chong-geul'; // 카카오톡 아이디를 여기에 입력하세요
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

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
    <>
      <section className='py-16 md:py-20 bg-sky-600'>
        <div className='container px-4 mx-auto md:px-6 text-center'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white mb-6'>
            청결의 프리미엄 서비스, <br className='md:hidden' />
            지금 바로 상담받아보세요
          </h2>
          <p className='text-sky-100 text-sm md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed'>
            365일 언제든 친절하게 상담해드립니다. <br className='hidden md:inline' />
            고객님의 일정과 예산에 맞춰 최적의 솔루션을 제안해드립니다.
          </p>
          <div className='flex justify-center items-center w-full'>
            {/* 미래 사용을 위한 카카오톡 버튼 (현재 주석처리) */}
            {/* <button
              onClick={handleOpenModal}
              className='flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-white text-sm sm:text-base font-bold text-sky-600 shadow-lg transition-colors hover:bg-sky-50 px-2 cursor-pointer'
            >
              카카오톡 무료 견적
            </button> */}
            <Link
              href='tel:010-2880-1814'
              onClick={handlePhoneClick}
              className='inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-white text-sm sm:text-base font-bold text-sky-600 shadow-lg transition-colors hover:bg-sky-50 px-6 sm:px-8 min-w-[200px] sm:min-w-[240px]'
            >
              전화 상담하기
            </Link>
          </div>
        </div>
      </section>

      {/* 미래 사용을 위한 카카오톡 모달 (현재 주석처리) */}
      {/* <KakaoModal isOpen={isModalOpen} onClose={handleCloseModal} kakaoId={kakaoId} /> */}
    </>
  );
}
