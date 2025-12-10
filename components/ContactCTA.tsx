import Link from 'next/link';

export default function ContactCTA() {
  return (
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
        <div className='flex flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none'>
          <Link
            href='https://pf.kakao.com/_xjHxjxjG/chat'
            target='_blank'
            className='flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-white text-sm sm:text-base font-bold text-sky-600 shadow-lg transition-colors hover:bg-sky-50 px-2'
          >
            카카오톡 무료 견적
          </Link>
          <Link
            href='tel:010-2880-1814'
            className='flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 text-sm sm:text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 px-2'
          >
            전화 상담하기
          </Link>
        </div>
      </div>
    </section>
  );
}
