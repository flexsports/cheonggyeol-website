import Image from 'next/image';

interface PremiumItem {
  title: string;
  description: string;
  imageSrc: string;
}

export default function PremiumService() {
  const premiumItems: PremiumItem[] = [
    {
      title: '합리적인가격',
      description: '투명한 가격 정책으로 합리적인 비용을 제공합니다',
      imageSrc: '/main_img/intro_img1.jpg',
    },
    {
      title: '정직한서비스',
      description: '정직하고 신뢰할 수 있는 서비스로 고객 만족을 추구합니다',
      imageSrc: '/main_img/intro_img2.jpg',
    },
    {
      title: '친환경 서비스',
      description: '환경을 생각하는 친환경 세제와 방법으로 안전하게 청소합니다',
      imageSrc: '/main_img/intro_img3.jpg',
    },
    {
      title: '철저한 AS',
      description: '작업 후에도 철저한 사후 관리를 통해 완벽한 서비스를 보장합니다',
      imageSrc: '/main_img/intro_img4.jpg',
    },
  ];

  return (
    <section className='py-20 px-4 bg-white mb-20'>
      <div className='w-[1375px] max-w-full mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            청결의 프리미엄 서비스
          </h2>
          <p className='text-gray-600'>고객 만족을 위한 4가지 핵심 가치</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {premiumItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
            >
              <div className='relative w-full h-64'>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
