'use client';

import { useState, useEffect } from 'react';
import {
  Quote,
  Building2,
  Sparkles,
  Users,
  Coffee,
  Armchair,
  Maximize,
  Fan,
  Monitor,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OfficeCleaningPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen bg-white font-sans text-gray-900'>
      {/* 1. Immersive Hero Section */}
      <section className='relative w-full h-[45vh] md:h-[52vh] flex items-center justify-center bg-slate-900 overflow-hidden'>
        {/* Background Overlay */}
        <div className='absolute inset-0 bg-black/40 z-10' />

        {/* Hero Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='/office/hero.jpg'
            alt='오피스 청소 히어로 배경'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Content */}
        <div className='relative z-20 container px-4 mx-auto text-center'>
          <div className='inline-block px-3 py-0.5 md:px-4 md:py-1 mb-4 md:mb-6 border border-orange-400/30 rounded-full bg-orange-400/10 backdrop-blur-sm'>
            <span className='text-orange-300 text-xs md:text-sm font-medium tracking-widest uppercase'>
              Office & Construction Management
            </span>
          </div>
          <h1 className='text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight px-2'>
            성공적인 비즈니스를 위한 <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500'>
              완벽한 공간 관리
            </span>
          </h1>
          <p className='max-w-2xl mx-auto text-gray-300 text-sm md:text-lg lg:text-xl font-light leading-relaxed mb-6 md:mb-10 px-2'>
            쾌적한 업무 환경은 기업의 경쟁력입니다. <br className='hidden md:inline' />
            사무실 청소부터 준공 청소까지 전문가에게 맡기세요.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Quote Section */}
      <section
        className={`py-12 md:py-16 mb-8 md:mb-10 bg-white text-center transition-all duration-[2000ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
      >
        <div className='container px-4 mx-auto max-w-4xl'>
          <Quote className='w-10 h-10 md:w-12 md:h-12 text-orange-200 mx-auto mb-4 md:mb-6 rotate-180' />
          <h2 className='text-xl md:text-2xl lg:text-4xl font-light italic leading-normal text-slate-800 mb-6 md:mb-8'>
            &ldquo;업무 효율을 높이는
            <br />
            최적의{' '}
            <span className='text-slate-900 font-semibold underline decoration-orange-400 decoration-2 underline-offset-4'>
              사무실 관리 서비스
            </span>
            를 제공합니다.&rdquo;
          </h2>
          <div className='w-16 h-1 bg-orange-400 mx-auto rounded-full' />
          <p className='mt-6 md:mt-8 text-gray-500 font-medium tracking-wide text-sm uppercase'>
            Cheonggyeol Master Team
          </p>
        </div>
      </section>

      {/* 3. Cleaning Scope Section (Simple Grid) */}
      <section className='py-12 md:py-20 bg-slate-50'>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-8 md:mb-12'>
            <span className='text-orange-600 font-bold tracking-widest text-xs md:text-sm uppercase block mb-2'>
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
                { name: '사무실/책상', icon: Monitor },
                { name: '회의실', icon: Users },
                { name: '임원실', icon: Armchair },
                { name: '탕비실', icon: Coffee },
                { name: '유리창/창틀', icon: Maximize },
                { name: '바닥 왁싱', icon: Sparkles },
                { name: '에어컨 필터', icon: Fan },
                { name: '화장실/공용', icon: Building2 },
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
              { name: '사무실/책상', icon: Monitor },
              { name: '회의실', icon: Users },
              { name: '임원실', icon: Armchair },
              { name: '탕비실', icon: Coffee },
              { name: '유리창/창틀', icon: Maximize },
              { name: '바닥 왁싱', icon: Sparkles },
              { name: '에어컨 필터', icon: Fan },
              { name: '화장실/공용', icon: Building2 },
            ].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all group'
              >
                <div className='w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors'>
                  <item.icon
                    className='w-8 h-8 text-slate-400 group-hover:text-orange-600 transition-colors'
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
          {/* Row 1: Workspace (Image Left) */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1'>
              <div className='aspect-[4/3] relative bg-slate-50 rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden'>
                  <Image
                    src='/office/office1.jpg'
                    alt='사무실 내부 사진'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <h3 className='text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Office Workspace
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                업무 효율을 높이는 쾌적한 공간
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                직원들이 하루 종일 머무는 공간인 만큼, 눈에 보이지 않는 미세먼지까지 관리하여 건강한
                업무 환경을 조성합니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '개인 책상 및 파티션 먼지 흡입',
                  '모니터 뒷면 및 전선 정리 정돈',
                  '공용 테이블 및 의자 소독',
                  '쓰레기 분리 배출 및 휴지통 세척',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0' />
                    <span className='text-slate-700 text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Meeting Rooms (Text Left) */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-1'>
              <h3 className='text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Meeting & Conference
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                중요한 미팅을 위한 준비
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                외부 손님 방문이 잦은 회의실과 임원실을 항상 청결하게 유지하여 회사의 품격을
                높여드립니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '대형 회의 테이블 및 의자 소독',
                  '화이트보드 및 유리벽 지문/얼룩 제거',
                  '블라인드 먼지 제거 및 창틀 청소',
                  '공기청정기 필터 먼지 제거',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0' />
                    <span className='text-slate-700 text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full lg:w-1/2 order-2'>
              <div className='aspect-[4/3] relative bg-slate-50 rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:-rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden flex items-center justify-center border border-dashed border-gray-300'>
                  <span className='absolute text-gray-400 text-xs md:text-sm z-0'>
                    이미지 준비중
                  </span>
                  <Image
                    src='/office/office22.jpg'
                    alt='회의실 사진'
                    fill
                    className='object-cover z-10'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Pantry (Image Left) */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1'>
              <div className='aspect-[4/3] relative bg-slate-50 rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden flex items-center justify-center border border-dashed border-gray-300'>
                  <span className='absolute text-gray-400 text-xs md:text-sm z-0'>
                    이미지 준비중
                  </span>
                  <Image
                    src='/office/office3.jpg'
                    alt='탕비실/휴게실 사진'
                    fill
                    className='object-cover z-10'
                  />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <h3 className='text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Pantry & Hygiene
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                위생적인 탕비실 & 휴게 공간
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                음식물 얼룩과 물때가 생기기 쉬운 탕비실을 집중 케어하여 악취와 세균 번식을 사전에
                차단합니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '싱크대 배수구 고온 스팀 살균',
                  '커피머신 주변 및 정수기 외부 세척',
                  '전자레인지/냉장고 내부 및 손잡이 소독',
                  '분리수거함 세척 및 주변 살균',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0' />
                    <span className='text-slate-700 text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 4: Floor Care (Text Left) */}
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 order-1'>
              <h3 className='text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3'>
                Floor Care System
              </h3>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6'>
                바닥 왁싱 & 코팅 솔루션
              </h2>
              <p className='text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8'>
                오염된 바닥을 벗겨내고 전용 왁스로 코팅하여 반짝이는 광택과 함께 바닥재의 수명을
                연장시킵니다.
              </p>
              <ul className='space-y-3 md:space-y-4'>
                {[
                  '기존 왁스 박리 및 오염 제거 작업',
                  '바닥 재질별 맞춤형 세정 진행',
                  '고광택 왁스 2회 코팅 마감',
                  '스크래치 방지 및 내구성 강화',
                ].map((item, i) => (
                  <li key={i} className='flex items-start'>
                    <div className='mt-1 mr-3 md:mr-4 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0' />
                    <span className='text-slate-700 text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full lg:w-1/2 order-2'>
              <div className='aspect-[4/3] relative bg-slate-50 rounded-sm shadow-xl p-2 md:p-3 border border-gray-100 lg:-rotate-1'>
                <div className='relative w-full h-full bg-slate-200 overflow-hidden flex items-center justify-center border border-dashed border-gray-300'>
                  <span className='absolute text-gray-400 text-xs md:text-sm z-0'>
                    이미지 준비중
                  </span>
                  <Image
                    src='/office/office4.jpg'
                    alt='바닥 왁싱 작업 사진'
                    fill
                    className='object-cover z-10'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 lg:py-20 bg-slate-900'>
        <div className='container px-4 mx-auto md:px-6 text-center'>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tighter text-white mb-4 md:mb-6'>
            청결의 프리미엄 서비스, <br className='md:hidden' />
            지금 바로 상담받아보세요
          </h2>
          <p className='text-white text-sm md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed'>
            365일 언제든 친절하게 상담해드립니다. <br className='hidden md:inline' />
            고객님의 일정과 예산에 맞춰 최적의 솔루션을 제안해드립니다.
          </p>
          <div className='flex flex-row gap-2.5 md:gap-3 lg:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none'>
            <Link
              href='https://pf.kakao.com/_xjHxjxjG/chat'
              target='_blank'
              className='flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-orange-500 text-sm sm:text-base font-bold text-gray-100 shadow-lg transition-colors hover:bg-orange-600 px-3 md:px-4'
            >
              카카오톡 무료 견적
            </Link>
            <Link
              href='tel:010-2880-1814'
              className='flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border-2 border-white/30 bg-white text-sm sm:text-base font-bold text-slate-900 backdrop-blur-sm transition-colors hover:bg-gray-200 px-3 md:px-4'
            >
              전화 상담하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
