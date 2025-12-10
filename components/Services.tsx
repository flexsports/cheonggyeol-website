'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

interface ServiceItemProps {
  title: string;
  iconSrc: string;
  href?: string;
  isAction?: boolean;
  showDivider?: boolean;
  isMobileCarousel?: boolean;
  isCenter?: boolean;
}

function ServiceItem({
  title,
  iconSrc,
  href,
  isAction,
  showDivider,
  isMobileCarousel,
  isCenter,
}: ServiceItemProps) {
  // Apply scale and opacity effects only for mobile carousel
  const mobileEffects = isMobileCarousel
    ? `transition-all duration-300 ${isCenter ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`
    : '';

  const content = (
    <div className={`flex flex-col items-center justify-center group ${mobileEffects}`}>
      <div
        className={`flex items-center justify-center ${
          isMobileCarousel ? 'w-28 h-28 mb-3' : 'w-20 h-20 mb-2'
        }`}
      >
        <Image
          src={iconSrc}
          alt={title}
          width={isMobileCarousel ? 112 : 76}
          height={isMobileCarousel ? 112 : 76}
          className='object-contain w-full h-full group-hover:scale-110 transition-transform duration-300'
          priority
        />
      </div>
      <span
        className={`font-bold text-center text-gray-900 ${
          isMobileCarousel ? 'text-lg' : 'text-lg'
        }`}
      >
        {title}
      </span>
    </div>
  );

  const itemContent = href ? (
    <Link
      href={href}
      target={isAction ? '_blank' : undefined}
      className='block no-underline hover:no-underline'
    >
      {content}
    </Link>
  ) : (
    content
  );

  if (isMobileCarousel) {
    return <div className='flex items-center justify-center h-full py-8'>{itemContent}</div>;
  }

  return (
    <div className={`flex items-center h-full ${showDivider ? 'border-r border-gray-300' : ''}`}>
      <div className='w-full cursor-pointer rounded-lg py-2'>{itemContent}</div>
    </div>
  );
}

export default function Services() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const services = [
    {
      title: '입주·이사 청소',
      iconSrc: '/main_icon/new_house_cleaning.png',
      href: '/move-in-cleaning',
      isAction: false,
    },
    {
      title: '거주청소',
      iconSrc: '/main_icon/residential_cleaning.png',
      href: '/residential-cleaning',
      isAction: false,
    },
    {
      title: '사무실청소',
      iconSrc: '/main_icon/post_construction_office_cleaning.png',
      href: '/office-cleaning',
      isAction: false,
    },
    {
      title: '줄눈시공',
      iconSrc: '/main_icon/tile_grout_work.png',
      href: '/grout-construction',
      isAction: false,
    },
    {
      title: '각종 코팅',
      iconSrc: '/main_icon/surface_coating.png',
      href: '/coating',
      isAction: false,
    },
  ];

  // Update current slide on carousel change
  useEffect(() => {
    if (!api) return;

    // Use queueMicrotask to avoid synchronous setState in effect
    queueMicrotask(() => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='relative md:-mt-20 mb-30 px-4'>
      {/* Mobile Background Image - Top positioned */}
      <div
        className='md:hidden absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat opacity-50'
        style={{
          backgroundImage: "url('/ps_bg.png')",
          backgroundPosition: 'center top',
        }}
      />

      {/* Desktop background positioning override */}
      <div
        className='hidden md:block absolute top-0 left-0 right-0 -bottom-10 bg-cover bg-no-repeat opacity-70'
        style={{
          backgroundImage: "url('/ps_bg.png')",
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Mobile Carousel - Only visible on mobile */}
      <div className='md:hidden mb-24'>
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
          }}
          className='w-full max-w-md mx-auto'
        >
          <CarouselContent className=''>
            {services.map((service, index) => (
              <CarouselItem key={index} className='basis-3/5'>
                <ServiceItem
                  title={service.title}
                  iconSrc={service.iconSrc}
                  href={service.href}
                  isAction={service.isAction}
                  isMobileCarousel={true}
                  isCenter={index === current}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Positioned on sides */}
          <CarouselPrevious className='left-8 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg' />
          <CarouselNext className='right-8 bg-white hover:bg-gray-100 border-2 border-gray-300 shadow-lg' />
        </Carousel>

        {/* Dot Indicators - Below carousel */}
        <div className='flex justify-center gap-2 mt-6'>
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-sky-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Box - Only visible on desktop */}
      <div className='hidden md:block relative z-10 w-[1375px] max-w-full mx-auto'>
        <div className='rounded-2xl bg-white shadow-lg pt-8 pb-8 border border-gray-200'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                iconSrc={service.iconSrc}
                href={service.href}
                isAction={service.isAction}
                showDivider={index < services.length - 1}
                isMobileCarousel={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section Below */}
      <div className='relative z-10 w-[1375px] max-w-full mx-auto'>
        <div className='flex flex-col items-center justify-center mt-12 md:mt-24 space-y-6'>
          {/* 1행: 텍스트 */}
          <div className='text-center'>
            <p className='text-sky-800 font-bold text-base'>청소에 프리미엄을 더하다</p>
            <p className='text-gray-700 text-base'>입주청소 전문기업</p>
          </div>

          {/* 2행: 세로로 긴 세퍼레이터 (디자인 가미) */}
          <div className='flex flex-col items-center'>
            <div className='w-px h-18 bg-linear-to-b from-gray-400 via-gray-400 to-transparent'></div>
          </div>

          {/* 3행: 로고 이미지 */}
          <div className='relative w-72 h-72'>
            <Image src='/main/main2.png' alt='Company Logo' fill className='object-contain' />
          </div>

          {/* 4행: 세로로 긴 세퍼레이터 (디자인 가미) */}
          <div className='flex flex-col items-center'>
            <div className='w-px h-18 bg-linear-to-b from-transparent via-gray-400 to-gray-400'></div>
          </div>

          {/* 5행: 텍스트 */}
          <div className='text-center'>
            <p className='text-sky-800 font-bold text-base'>전국 출장 가능</p>
            <p className='text-gray-700 text-base'>당일예약/청소, 선 예약 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
}
