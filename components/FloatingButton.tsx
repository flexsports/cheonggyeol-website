'use client';

import Image from 'next/image';
import Link from 'next/link';

// Phone Button Component
function PhoneButton() {
  return (
    <Link
      href='tel:010-2880-1814'
      className='w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95'
      aria-label='전화하기'
    >
      <div className='relative w-10 h-10 md:w-14 md:h-14'>
        <Image src='/phone_icon.svg' alt='전화 아이콘' fill className='object-contain' />
      </div>
    </Link>
  );
}

// Kakao Button Component
function KakaoButton() {
  return (
    <Link
      href='https://open.kakao.com/o/example'
      target='_blank'
      rel='noopener noreferrer'
      className='w-10 h-10 md:w-14 md:h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95'
      aria-label='카카오톡 상담하기'
    >
      <div className='relative w-7 h-7 md:w-9 md:h-9 md:mt-0.5'>
        <Image src='/kakao_icon.svg' alt='카카오톡 아이콘' fill className='object-contain' />
      </div>
    </Link>
  );
}

// Main FloatingButton Component
export default function FloatingButton() {
  return (
    <div className='fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col md:gap-3 gap-1'>
      <PhoneButton />
      <KakaoButton />
    </div>
  );
}
