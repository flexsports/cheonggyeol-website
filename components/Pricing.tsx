import Image from 'next/image';

interface PricingItem {
  title: string;
  price: string;
  criteria: string[];
  iconSrc: string;
}

export default function Pricing() {
  const pricingItems: PricingItem[] = [
    {
      title: '입주청소',
      price: '평당 11,000원',
      criteria: ['공급, 분양 평수 기준'],
      iconSrc: '/main_icon/price_icon1.svg',
    },
    {
      title: '이사청소',
      price: '평당 11,000원',
      criteria: ['공급, 분양 평수 기준', '특이사항에 따른 기준'],
      iconSrc: '/main_icon/price_icon2.svg',
    },
    {
      title: '거주청소',
      price: '평당 13,000원',
      criteria: ['공급 평수 기준', '내부 물건양에 따른 기준'],
      iconSrc: '/main_icon/price_icon3.svg',
    },
    {
      title: '사무실/상가 청소',
      price: '평당 13,000원',
      criteria: ['공급 평수 기준', '사무실, 카페, 식당, 학원 등'],
      iconSrc: '/main_icon/price_icon4.svg',
    },
    {
      title: '빌라/오피스텔 청소',
      price: '전화문의',
      criteria: ['공급 평수,', '방(1/2/3/4) 구성에 따른 기준'],
      iconSrc: '/main_icon/price_icon5.svg',
    },
  ];

  return (
    <section className='py-20 px-4 bg-gray-50 pb-40'>
      <div className='w-[1375px] max-w-full mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>가격 안내</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
          {pricingItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
            >
              <div className='flex flex-col items-center text-center'>
                {/* Icon */}
                <div className='relative w-20 h-20 mb-4'>
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={80}
                    height={80}
                    className='object-contain'
                  />
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>

                {/* Price */}
                <div className='mb-4'>
                  <p className='text-2xl font-bold text-sky-600'>{item.price}</p>
                </div>

                {/* Criteria */}
                <div className='space-y-1'>
                  {item.criteria.map((criterion, idx) => (
                    <p key={idx} className='text-sm text-gray-600'>
                      {criterion}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
