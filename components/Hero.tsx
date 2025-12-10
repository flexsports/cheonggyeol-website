import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero_image4.png'
        alt='Cleaning Service Hero'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-black/10' />{' '}
      {/* Dark overlay for better text contrast if needed later */}
      <div className='relative z-10 text-center text-white px-4 md:pr-12 md:px-0'>
        <h1 className='text-3xl md:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg leading-tight'>
          공간의 가치를 더하는
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-50 to-sky-200'>
            프리미엄 청소 서비스
          </span>
        </h1>
        <p className='text-sm md:text-xl drop-shadow-md opacity-90 mb-4 md:mb-6'>
          당신의 소중한 공간을 더욱 빛나게 만들어드립니다.
        </p>
        {/* Badge Section - Single row on mobile */}
        <div className='flex flex-nowrap items-center justify-center gap-2 md:gap-4 px-2'>
          <div className='bg-sky-600/85 text-white px-4 py-2.5 md:px-6 md:py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg whitespace-nowrap'>
            전국출장
          </div>
          <div className='bg-sky-600/85 text-white px-4 py-2.5 md:px-6 md:py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg whitespace-nowrap'>
            당일예약
          </div>
          <div className='bg-sky-600/85 text-white px-4 py-2.5 md:px-6 md:py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg whitespace-nowrap'>
            당일청소
          </div>
        </div>
      </div>
    </section>
  );
}
