'use client';

import { Heart, Baby, Sun, Sparkles, ArrowRight, Smile, Coffee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import ContactCTA from '@/components/ContactCTA';

export default function MoveInCleaningPage() {
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
    <div className='flex flex-col w-full min-h-screen bg-sky-50/70 font-sans selection:bg-sky-100'>
      {/* 1. Cool Hero Section */}
      <section className='relative pt-8 pb-12 md:pt-20 lg:pt-16 lg:pb-36 px-4 md:px-6 overflow-hidden'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20'>
            {/* Text Content */}
            <div className='w-full lg:w-1/2 text-center lg:text-left z-10'>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4 bg-white rounded-full shadow-sm border border-slate-100'>
                <Sun className='w-4 h-4 md:w-5 md:h-5 text-orange-400 fill-orange-400' />
                <span className='text-slate-600 font-medium text-xs md:text-sm'>
                  맑은 하늘처럼 쾌적한 우리 집
                </span>
              </div>
              <h1 className='text-3xl md:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-[1.2]'>
                설레는 새 출발, <br />
                <span className='relative inline-block'>
                  <span className='relative z-10'>기분 좋은 깨끗함</span>
                  <span className='absolute bottom-2 left-0 w-full h-3 bg-sky-200/60 -z-0 rounded-full'></span>
                </span>
                으로 <br />
                시작하세요
              </h1>
              <p className='text-sm md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0'>
                새 집에서의 첫 날이 가장 행복한 기억이 되도록, <br className='hidden md:inline' />
                보이지 않는 곳까지 정성을 담아 준비해드립니다.
              </p>
              <div className='flex flex-row gap-2.5 md:gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0'>
                {/* 미래 사용을 위한 카카오톡 연동 버튼 (현재 주석처리) */}
                {/* <Link
                  href='https://pf.kakao.com/_xjHxjxjG/chat'
                  target='_blank'
                  className='flex-1 md:flex-none w-auto min-w-[140px] md:min-w-[160px] inline-flex items-center justify-center h-12 md:h-14 px-4 md:px-8 bg-slate-800 text-white font-bold text-sm md:text-base rounded-2xl transition-all shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl'
                >
                  무료 견적 받기
                  <ArrowRight className='w-4 h-4 md:w-5 md:h-5 ml-2' />
                </Link> */}
                <Link
                  href='tel:010-2880-1814'
                  onClick={handlePhoneClick}
                  className='flex-none w-auto min-w-[180px] md:min-w-[160px] inline-flex items-center justify-center h-12 md:h-14 px-3 md:px-8 bg-slate-800 text-white font-bold text-sm md:text-base rounded-2xl transition-all shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl'
                >
                  무료 견적 받기
                  <ArrowRight className='w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2' />
                </Link>
                {/* 미래 사용을 위한 전화 상담 버튼 (현재 주석처리) */}
                {/* <Link
                  href='tel:010-2880-1814'
                  onClick={handlePhoneClick}
                  className='flex-1 md:flex-none w-auto min-w-[140px] md:min-w-[160px] inline-flex items-center justify-center h-12 md:h-14 px-4 md:px-8 bg-white text-slate-800 font-bold text-sm md:text-base rounded-2xl border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300'
                >
                  전화 상담
                </Link> */}
              </div>
            </div>

            {/* Hero Image Area - Soft Shape */}
            <div className='w-full lg:w-1/2 relative'>
              <div className='relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto'>
                <div className='absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl md:shadow-2xl overflow-hidden border-4 md:border-8 border-white transform lg:rotate-2'>
                  <Image
                    src='/move_in_cleaning/hero3.jpg'
                    alt='따뜻한 거실'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
                {/* Floating Elements */}
                <div className='absolute -top-2 -right-2 md:-top-4 md:-right-4 lg:right-0 bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl'>
                  <Sparkles className='w-5 h-5 md:w-8 md:h-8 text-yellow-400 fill-yellow-400' />
                </div>
                <div className='absolute -bottom-4 -left-2 md:-bottom-6 md:-left-4 lg:left-0 bg-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl flex items-center gap-2 md:gap-3'>
                  <div className='w-8 h-8 md:w-10 md:h-10 bg-sky-100 rounded-full flex items-center justify-center'>
                    <Smile className='w-5 h-5 md:w-6 md:h-6 text-sky-500' />
                  </div>
                  <div>
                    <p className='text-[10px] md:text-xs text-slate-500'>고객 만족도</p>
                    <p className='text-base md:text-lg font-bold text-slate-800'>5.0 / 5.0</p>
                  </div>
                </div>
              </div>
              {/* Background Blob */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-100/50 rounded-full blur-3xl -z-10' />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Emotional Value - Cards */}
      <section className='py-12 md:py-20 bg-white rounded-t-[2rem] md:rounded-t-[3rem] -mt-6 md:-mt-10 relative z-10'>
        <div className='container px-4 mx-auto'>
          <div className='text-center mb-10 md:mb-16'>
            <span className='text-sky-500 font-bold tracking-wider text-xs md:text-sm uppercase mb-2 block'>
              Our Value
            </span>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6'>
              단순한 청소, <br />그 이상의 가치
            </h2>
            <p className='text-slate-600 text-sm md:text-lg max-w-2xl mx-auto'>
              우리가 청소하는 것은 단순한 공간이 아닙니다. <br className='hidden md:inline' />
              사랑하는 가족이 숨 쉬고, 꿈꾸고, 살아갈 소중한 일상입니다.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto'>
            {/* Card 1 */}
            <div className='group bg-white border shadow-sm p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-xl transition-all hover:-translate-y-1'>
              <div className='flex items-center gap-3 md:flex-col md:items-center mb-0 md:mb-6'>
                <div className='w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform'>
                  <Baby className='w-5 h-5 md:w-8 md:h-8 text-sky-400' />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-slate-800 mb-0 md:mb-3'>
                  아이를 위한 안심 케어
                </h3>
              </div>
              <p className='text-slate-600 text-sm md:text-base leading-relaxed mt-3 md:mt-0'>
                면역력이 약한 아이들을 위해 <strong>친환경 세제</strong>만을 고집합니다. 화학 잔여물
                걱정 없이 안심하고 뛰어놀 수 있는 공간을 만듭니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className='group bg-white border shadow-sm p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-xl transition-all hover:-translate-y-1'>
              <div className='flex items-center gap-3 md:flex-col md:items-center mb-0 md:mb-6'>
                <div className='w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform'>
                  <Heart className='w-5 h-5 md:w-8 md:h-8 text-rose-400' />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-slate-800 mb-0 md:mb-3'>
                  가족의 건강을 최우선
                </h3>
              </div>
              <p className='text-slate-600 text-sm md:text-base leading-relaxed mt-3 md:mt-0'>
                보이지 않는 <strong>공사 분진과 미세먼지</strong>는 호흡기 건강의 적입니다. 전문
                장비로 미세한 틈새의 먼지까지 완벽하게 제거합니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className='group bg-white border shadow-sm p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-xl transition-all hover:-translate-y-1'>
              <div className='flex items-center gap-3 md:flex-col md:items-center mb-0 md:mb-6'>
                <div className='w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform'>
                  <Coffee className='w-5 h-5 md:w-8 md:h-8 text-slate-600' />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-slate-800 mb-0 md:mb-3'>
                  여유로운 이사 준비
                </h3>
              </div>
              <p className='text-slate-600 text-sm md:text-base leading-relaxed mt-3 md:mt-0'>
                청소는 저희에게 맡기시고, 고객님은 <strong>새로운 집에서의 행복한 계획</strong>만
                세우세요. 가장 깨끗한 상태로 고객님을 맞이하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Soft Process Section */}
      <section className='py-12 md:py-20 bg-sky-50/70 mb-12 md:mb-20'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24'>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight'>
                정성을 다하는 마음으로 <br />
                <span className='text-sky-500'>구석구석 살핍니다</span>
              </h2>
              <div className='space-y-4 md:space-y-6'>
                {[
                  {
                    title: '주방 - 맛있는 이야기가 시작되는 곳',
                    desc: '기름때 없는 후드, 반짝이는 싱크대. 바로 요리를 시작하실 수 있도록 고온 스팀으로 살균합니다.',
                  },
                  {
                    title: '욕실 - 하루의 피로를 씻는 곳',
                    desc: '물때와 곰팡이를 제거하고, 맨발로 딛어도 기분 좋은 보송보송한 욕실을 만듭니다.',
                  },
                  {
                    title: '방/거실 - 편안한 쉼이 있는 곳',
                    desc: '천장의 풀자국부터 바닥의 묵은 먼지까지. 온 가족이 뒹굴어도 안전한 깨끗한 공간이 됩니다.',
                  },
                  {
                    title: '창틀/베란다 - 바깥과 만나는 곳',
                    desc: '쌓인 흙먼지를 털어내고, 맑은 햇살이 집안 가득 들어오도록 투명하게 닦아냅니다.',
                  },
                ].map((item, i) => (
                  <div key={i} className='flex gap-3 md:gap-5'>
                    <div className='flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-sky-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400' />
                    </div>
                    <div>
                      <h3 className='text-lg md:text-xl font-bold text-slate-800 mb-1.5 md:mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='relative'>
                <div className='grid grid-cols-2 gap-2 md:gap-4'>
                  <div className='aspect-square bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm p-1.5 md:p-2 transform lg:translate-y-8'>
                    <div className='relative w-full h-full bg-slate-100 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden'>
                      <Image
                        src='/move_in_cleaning/kitchen2.jpg'
                        alt='주방 청소'
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                  <div className='aspect-square bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm p-1.5 md:p-2'>
                    <div className='relative w-full h-full bg-slate-100 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden'>
                      <Image
                        src='/move_in_cleaning/bathroom.jpg'
                        alt='욕실 청소'
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                  <div className='aspect-square bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm p-1.5 md:p-2 transform lg:translate-y-8'>
                    <div className='relative w-full h-full bg-slate-100 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden'>
                      <Image
                        src='/move_in_cleaning/livingroom.jpg'
                        alt='거실 청소'
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                  <div className='aspect-square bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm p-1.5 md:p-2'>
                    <div className='relative w-full h-full bg-slate-100 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden'>
                      <Image
                        src='/move_in_cleaning/window.png'
                        alt='창틀 청소'
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
