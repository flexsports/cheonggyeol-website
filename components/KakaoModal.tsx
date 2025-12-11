'use client';

import Image from 'next/image';
import { useState } from 'react';

interface KakaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  kakaoId: string;
}

export default function KakaoModal({ isOpen, onClose, kakaoId }: KakaoModalProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(kakaoId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const handleClose = () => {
    setIsCopied(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
      onClick={handleClose}
    >
      {/* 모달 컨텐츠 */}
      <div
        className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'
          aria-label='닫기'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* 모달 내용 */}
        <div className='text-center'>
          <div className='mb-4 flex items-center justify-center gap-3'>
            <div className='relative w-12 h-12 md:w-16 md:h-16'>
              <Image src='/kakao_icon.svg' alt='카카오톡 아이콘' fill className='object-contain' />
            </div>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900'>카카오톡 상담 안내</h3>
          </div>

          <div className='bg-gray-50 rounded-xl p-4 mb-4 border-2 border-sky-100'>
            <p className='text-xs text-gray-500 mb-1'>카카오톡 아이디</p>
            <div className='flex items-center justify-center gap-3'>
              <p className='text-2xl font-bold text-gray-900'>{kakaoId}</p>
              <button
                onClick={handleCopyId}
                className='p-2 text-gray-900 hover:text-black hover:bg-gray-200 rounded-lg transition-colors cursor-pointer'
                aria-label='복사'
              >
                {isCopied ? (
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                ) : (
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <p className='text-xs text-gray-500'>
            카카오톡 앱에서 아이디로 검색하여 친구 추가해주세요
          </p>
        </div>
      </div>
    </div>
  );
}
