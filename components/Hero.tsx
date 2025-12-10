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
        <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg'>
          공간의 가치를 더하는
          <br />
          프리미엄 청소 서비스
        </h1>
        <p className='text-lg md:text-xl drop-shadow-md opacity-90 mb-6'>
          당신의 소중한 공간을 더욱 빛나게 만들어드립니다.
        </p>
        {/* Badge Section */}
        <div className='flex flex-wrap items-center justify-center gap-4 px-4'>
          <div className='bg-sky-600/85 text-white px-6 py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg'>
            전국출장
          </div>
          <div className='bg-sky-600/85 text-white px-6 py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg'>
            당일예약
          </div>
          <div className='bg-sky-600/85 text-white px-6 py-2 rounded-4xl font-semibold text-sm md:text-lg shadow-lg'>
            당일청소
          </div>
        </div>
      </div>
    </section>
  );
}
