'use client';

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function CoatingPage() {
  const marbleImages = ['/coating/marble1.jpg'];
  const floorImages = ['/coating/floor1.jpg'];
  const bathroomImages = ['/coating/bathroom1.jpg'];

  return (
    <div className='flex flex-col w-full min-h-screen bg-slate-50 font-sans text-gray-900'>
      {/* Hero Section */}
      <section className='relative w-full h-[35vh] md:h-[30vh] bg-slate-700 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/40 z-10' />
        <div className='relative z-20 text-center text-white px-4'>
          <h1 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4'>각종코팅</h1>
          <p className='text-xs md:text-lg text-gray-200 font-light'>
            공간을 보호하고 아름답게 만드는 코팅 서비스
          </p>
        </div>
      </section>

      {/* Content Section - Carousels */}
      <section className='py-8 md:py-16 container mx-auto px-4 max-w-5xl'>
        <div className='mb-8 md:mb-12 text-center'>
          <h2 className='text-lg md:text-2xl font-bold mb-2 md:mb-3 text-slate-800 px-2'>
            {'"오래 지속되는 보호막으로 공간의 가치를 높입니다"'}
          </h2>
          <p className='text-gray-600 text-sm md:text-base'>
            전문 코팅 기술로 공간을 보호하고 아름답게 유지합니다
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {/* Marble Coating Carousel */}
          <div className='bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100'>
            <Carousel className='w-full'>
              <CarouselContent>
                {marbleImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className='relative w-full h-48 md:h-64 rounded-lg overflow-hidden'>
                      <Image
                        src={src}
                        alt={`대리석 코팅 ${index + 1}`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-1 md:left-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
              <CarouselNext className='right-1 md:right-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
            </Carousel>
            <div className='mt-3 md:mt-4'>
              <h3 className='text-base md:text-xl font-bold text-slate-800 mb-1.5 md:mb-2'>
                대리석 코팅
              </h3>
              <p className='text-gray-500 text-sm'>
                스크래치 제거 및 광택 복원을 통한 프리미엄 보호 코팅
              </p>
            </div>
          </div>

          {/* Floor Coating Carousel */}
          <div className='bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100'>
            <Carousel className='w-full'>
              <CarouselContent>
                {floorImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className='relative w-full h-48 md:h-64 rounded-lg overflow-hidden'>
                      <Image
                        src={src}
                        alt={`마루 코팅 ${index + 1}`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-1 md:left-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
              <CarouselNext className='right-1 md:right-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
            </Carousel>
            <div className='mt-3 md:mt-4'>
              <h3 className='text-base md:text-xl font-bold text-slate-800 mb-1.5 md:mb-2'>
                마루 코팅
              </h3>
              <p className='text-gray-500 text-sm'>생활 스크래치 방지와 내구성 강화를 위한 코팅</p>
            </div>
          </div>

          {/* Bathroom Coating Carousel */}
          <div className='bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100'>
            <Carousel className='w-full'>
              <CarouselContent>
                {bathroomImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className='relative w-full h-48 md:h-64 rounded-lg overflow-hidden'>
                      <Image
                        src={src}
                        alt={`욕실 코팅 ${index + 1}`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-1 md:left-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
              <CarouselNext className='right-1 md:right-2 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg w-8 h-8 md:w-10 md:h-10' />
            </Carousel>
            <div className='mt-3 md:mt-4'>
              <h3 className='text-base md:text-xl font-bold text-slate-800 mb-1.5 md:mb-2'>
                욕실 코팅
              </h3>
              <p className='text-gray-500 text-sm'>방수 및 물때 방지를 위한 미끄럼방지 코팅</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
