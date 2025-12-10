'use client';

import { useState, useEffect } from 'react';
import {
  Quote,
  Armchair,
  Utensils,
  Bath,
  Sun,
  DoorOpen,
  Maximize,
  Archive,
  Lightbulb,
} from 'lucide-react';
import Image from 'next/image';
import ContactCTA from '../../components/ContactCTA';

export default function ResidentialCleaningPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 잠시 뒤에 등장 효과 실행
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen bg-white font-sans text-gray-900'>
      {/* 1. Immersive Hero Section - Dark Navy */}
      <section className='relative w-full h-[45vh] md:h-[52vh] flex items-center justify-center bg-slate-900 overflow-hidden'>
        {/* Background Overlay */}
        <div className='absolute inset-0 bg-black/40 z-10' />

        {/* Hero Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='/move_in_cleaning/hero2.png'
            alt='입주청소 히어로 배경'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Content */}
        <div className='relative z-20 container px-4 mx-auto text-center'>
          <div className='inline-block px-3 py-0.5 md:px-4 md:py-1 mb-4 md:mb-6 border border-sky-400/30 rounded-full bg-sky-400/10 backdrop-blur-sm'>
            <span className='text-sky-300 text-xs md:text-sm font-medium tracking-widest uppercase'>
              Premium Cleaning
            </span>
          </div>
          <h1 className='text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight px-2'>
            당신의 소중한 일상을 위한 <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500'>
              프리미엄 청소 서비스
            </span>
          </h1>
          <p className='max-w-2xl mx-auto text-gray-300 text-sm md:text-lg lg:text-xl font-light leading-relaxed mb-6 md:mb-10 px-2'>
            현재 거주 중인 공간도 새 집처럼 깨끗하게. <br className='hidden md:inline' />
            짐이 있어도 걱정 없는 섬세한 케어를 약속합니다.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Quote Section - Animation Triggered on Load */}
      <section
        className={`py-12 md:py-16 mb-8 md:mb-10 bg-white text-center transition-all duration-[2000ms] ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className='container px-4 mx-auto max-w-4xl'>
          <Quote className='w-10 h-10 md:w-12 md:h-12 text-sky-200 mx-auto mb-4 md:mb-6 rotate-180' />
          <h2 className='text-xl md:text-2xl lg:text-4xl font-light italic leading-normal text-slate-800 mb-6 md:mb-8'>
            &ldquo;하루의 피로가 머무는 집, <br />
            그곳을{' '}
            <span className='text-slate-900 font-semibold underline decoration-sky-400 decoration-2 underline-offset-4'>
              가장 편안한 쉼터
            </span>
            로 만들어드립니다.&rdquo;
          </h2>
          <div className='w-16 h-1 bg-sky-400 mx-auto rounded-full' />
          <p className='mt-6 md:mt-8 text-gray-500 font-medium tracking-wide text-sm uppercase'>
            Cheonggyeol Master Team
          </p>
        </div>
      </section>

      {/* 3. Cleaning Scope Section (Simple Grid) */}
      <section className='py-12 md:py-20 bg-slate-50'>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-8 md:mb-12'>
            <span className='text-sky-600 font-bold tracking-widest text-xs md:text-sm uppercase block mb-2'>
              Service Scope
            </span>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900'>
              청소 진행 범위
            </h2>
          </div>

          {/* Mobile: Single Box with List */}
          <div className='md:hidden bg-white rounded-2xl shadow-sm border border-slate-100 p-4 max-w-5xl mx-auto'>
            <div className='grid grid-cols-2 gap-3'>
              {[
                { name: '방/거실', icon: Armchair },
                { name: '주방', icon: Utensils },
                { name: '욕실/화장실', icon: Bath },
                { name: '베란다/다용도실', icon: Sun },
                { name: '현관', icon: DoorOpen },
                { name: '창문/창틀', icon: Maximize },
                { name: '붙박이장', icon: Archive },
                { name: '조명/전등', icon: Lightbulb },
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 transition-colors'
                >
                  <div className='w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0'>
                    <item.icon className='w-4 h-4 text-slate-400' strokeWidth={1.5} />
                  </div>
                  <span className='text-slate-700 font-medium text-sm'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className='hidden md:grid md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto'>
            {[
              { name: '방/거실', icon: Armchair },
              { name: '주방', icon: Utensils },
              { name: '욕실/화장실', icon: Bath },
              { name: '베란다/다용도실', icon: Sun },
              { name: '현관', icon: DoorOpen },
              { name: '창문/창틀', icon: Maximize },
              { name: '붙박이장', icon: Archive },
              { name: '조명/전등', icon: Lightbulb },
            ].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all group'
              >
                <div className='w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-50 transition-colors'>
                  <item.icon
                    className='w-8 h-8 text-slate-400 group-hover:text-sky-600 transition-colors'
                    strokeWidth={1.5}
                  />
                </div>
                <span className='text-slate-700 font-bold text-lg'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detailed Process - Zig Zag Layout */}
      <section className='py-12 md:py-24 bg-white pb-24 md:pb-48'>
        <div className='container px-4 mx-auto max-w-6xl space-y-16 md:space-y-24'>
          {/* Row 1: Living & Room */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1'>
              <div className='aspect-[4/3] relative bg-white rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden'>
                  <Image
                    src='/residential_cleaning/res1.jpg'
                    alt='거실/방 청소 연출 이미지'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <h3 className='text-sky-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Living Space
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                숨 쉬는 공간, 거실 & 침실
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                가족이 가장 오래 머무는 공간인 만큼, 눈에 보이는 곳은 물론 천장부터 바닥, 벽면의
                미세먼지까지 완벽하게 케어합니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '천장 몰딩 및 벽지 건식 케어',
                  '전등갓 분리 세척 및 스위치/콘센트 클리닝',
                  '바닥재 특성에 맞춘 전용 세제 사용',
                  '외창을 제외한 내부 유리창 및 창틀 완벽 세척',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0' />
                    <span className='text-slate-700 text-sm md:text-base'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Kitchen */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-1'>
              <h3 className='text-sky-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Kitchen & Dining
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                위생의 중심, 주방
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                가장 위생적이어야 할 주방은 고온 스팀 살균을 기본으로 합니다. 기름때와 물때를
                완벽하게 제거하여 바로 요리할 수 있는 상태로 만들어드립니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '싱크대 상/하부장 내외부 정밀 세척',
                  '가스레인지/후드 필터 기름때 불림 세척',
                  '걸레받이 탈거 후 하부 보이지 않는 곳 청소',
                  '배수구 고온 스팀 살균 처리',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0' />
                    <span className='text-slate-700 text-sm md:text-base'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full lg:w-1/2 order-2'>
              <div className='aspect-[4/3] relative bg-white rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:-rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden'>
                  <Image
                    src='/residential_cleaning/res2.jpg'
                    alt='주방 청소 연출 이미지'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Bathroom */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1'>
              <div className='aspect-[4/3] relative bg-white rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden'>
                  <Image
                    src='/residential_cleaning/res3.jpg'
                    alt='욕실 청소 연출 이미지'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <h3 className='text-sky-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Bath Room
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                힐링의 공간, 욕실
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                천장부터 바닥까지 물때와 곰팡이를 제거하고, 호텔 욕실처럼 반짝이고 쾌적한 공간으로
                탈바꿈시킵니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '천장 돔 및 환풍기 분해 청소',
                  '세면대/수전/샤워부스 물때 스케일링',
                  '벽면/바닥 타일 사이 곰팡이 집중 케어',
                  '배수구 트랩 분리 세척 및 살균',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0' />
                    <span className='text-slate-700 text-sm md:text-base'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
