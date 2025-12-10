import Link from 'next/link';
import Image from 'next/image';

interface ServiceItemProps {
  title: string;
  iconSrc: string;
  href?: string;
  isAction?: boolean;
  showDivider?: boolean;
}

function ServiceItem({ title, iconSrc, href, isAction, showDivider }: ServiceItemProps) {
  const content = (
    <div className='flex flex-col items-center justify-center group'>
      <div className='mb-2 w-20 h-20 flex items-center justify-center'>
        <Image
          src={iconSrc}
          alt={title}
          width={76}
          height={76}
          className='object-contain w-full h-full group-hover:scale-110 transition-transform duration-300'
          priority
        />
      </div>
      <span className='text-lg font-bold text-center text-gray-900'>{title}</span>
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

  return (
    <div className={`flex items-center h-full ${showDivider ? 'border-r border-gray-300' : ''}`}>
      <div className='w-full cursor-pointer rounded-lg py-2'>{itemContent}</div>
    </div>
  );
}

export default function Services() {
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
    {
      title: '카카오톡 상담',
      iconSrc: '/main_icon/kakao_chat_link.png',
      href: 'https://open.kakao.com/o/example',
      isAction: true,
    },
  ];

  return (
    <section className='relative -mt-20 mb-30 px-4'>
      {/* Background Image */}
      <div
        className='absolute top-0 left-0 right-0 -bottom-10 bg-cover bg-center bg-no-repeat opacity-70'
        style={{
          backgroundImage: "url('/ps_bg.png')",
          backgroundPosition: 'center bottom',
        }}
      />
      <div className='relative z-10 w-[1375px] max-w-full mx-auto'>
        <div className='rounded-2xl bg-white shadow-lg pt-8 pb-8 border border-gray-200'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                iconSrc={service.iconSrc}
                href={service.href}
                isAction={service.isAction}
                showDivider={index < services.length - 1}
              />
            ))}
          </div>
        </div>

        {/* New Section Below Services */}
        <div className='flex flex-col items-center justify-center mt-24 space-y-6'>
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
