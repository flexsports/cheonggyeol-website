import Image from 'next/image';

// Icon Components
const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='shrink-0'
  >
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
    <circle cx='12' cy='7' r='4'></circle>
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='shrink-0'
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='shrink-0'
  >
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='shrink-0'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    <polyline points='22,6 12,13 2,6'></polyline>
  </svg>
);

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-700 py-4 px-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-1 items-center md:items-start'>
        {/* Logo Section - Centered on mobile, left on desktop */}
        <div className='flex justify-center md:justify-start w-full md:w-auto'>
          <div className='relative w-40 h-34 block md:ml-20'>
            <Image
              src='/footer_logo2.png'
              alt='Company Logo'
              fill
              className='object-contain object-center md:object-left'
            />
          </div>
        </div>

        {/* Contact Information - Centered on mobile, left-aligned on desktop */}
        <div className='flex-1 w-full md:w-auto'>
          <div className='space-y-1 md:text-sm text-xs mt-2 md:mt-5 text-center md:text-left'>
            <div className='flex items-start justify-cente md:justify-start gap-1'>
              <div className='pt-0.5 shrink-0'>
                <UserIcon />
              </div>
              <span>대표이사: 김현진</span>
            </div>
            <div className='flex items-start  md:justify-start gap-1'>
              <div className='pt-0.5 shrink-0'>
                <LocationIcon />
              </div>
              <span>경기도 광명시 소하로190 광명G타워 A동 1005호</span>
            </div>
            <div className='flex items-start justify-cente md:justify-start gap-1'>
              <div className='pt-0.5 shrink-0'>
                <PhoneIcon />
              </div>
              <span>010-2880-1814, 02-6941-0787</span>
            </div>
            <div className='flex items-start justify-cente md:justify-start gap-1'>
              <div className='pt-0.5 shrink-0'>
                <EmailIcon />
              </div>
              <span>cjdruf1814@naver.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto mt-4 pt-6 border-t border-gray-300 text-center text-xs text-gray-500'>
        &copy; {new Date().getFullYear()} CheongGyeol. All rights reserved.
      </div>
    </footer>
  );
}
