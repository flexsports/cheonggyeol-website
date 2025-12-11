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

export default function GroutConstructionPage() {
  const bathroomImages = ['/grout/grout1.jpg', '/grout/grout2.jpg', '/grout/grout3.jpg'];

  const livingroomImages = ['/grout/bgrout1.webp', '/grout/bgrout2.jpg', '/grout/bgrout3.jpg'];

  return (
    <div className='flex flex-col w-full min-h-screen bg-slate-50 font-sans text-gray-900'>
      {/* Hero Section */}
      <section className='relative w-full h-[25vh] md:h-[30vh] bg-slate-700 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/40 z-10' />
        <div className='relative z-20 text-center text-white px-4'>
          <h1 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4'>줄눈시공</h1>
          <p className='text-xs md:text-lg text-gray-200 font-light'>
            깔끔하고 위생적인 공간을 위한 선택
          </p>
        </div>
      </section>

      {/* Content Section - Carousels */}
      <section className='py-8 md:py-16 container mx-auto px-4 max-w-5xl'>
        <div className='mb-8 md:mb-12 text-center'>
          <h2 className='text-lg md:text-2xl font-bold mb-2 md:mb-3 text-slate-800 px-2'>
            {'"깔끔하고 위생적인 줄눈 시공으로 공간을 새롭게"'}
          </h2>
          <p className='text-gray-600 text-sm md:text-base'>물때와 곰팡이 없는 깨끗한 줄눈 시공</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {/* Bathroom Carousel */}
          <div className='bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100'>
            <Carousel className='w-full'>
              <CarouselContent>
                {bathroomImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className='relative w-full h-48 md:h-64 rounded-lg overflow-hidden'>
                      <Image
                        src={src}
                        alt={`욕실 줄눈 시공 ${index + 1}`}
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
                욕실 줄눈 시공
              </h3>
              <p className='text-gray-500 text-sm'>물때와 곰팡이 방지를 위한 프리미엄 줄눈 시공</p>
            </div>
          </div>

          {/* Living Room Carousel */}
          <div className='bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100'>
            <Carousel className='w-full'>
              <CarouselContent>
                {livingroomImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className='relative w-full h-48 md:h-64 rounded-lg overflow-hidden'>
                      <Image
                        src={src}
                        alt={`거실/베란다 줄눈 시공 ${index + 1}`}
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
                거실/베란다 줄눈 시공
              </h3>
              <p className='text-gray-500 text-sm'>인테리어 효과와 청결함을 동시에</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
