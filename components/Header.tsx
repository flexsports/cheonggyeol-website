import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const menuItems = [
    { label: '입주·이사 청소', href: '/move-in-cleaning' },
    { label: '준공, 사무실 청소', href: '/office-cleaning' },
    { label: '각종코팅', href: '/coating' },
    { label: '거주청소', href: '/residential-cleaning' },
    { label: '줄눈시공', href: '/grout-construction' },
  ];

  return (
    <header className='w-full h-20 bg-white shadow-sm flex items-center justify-between px-4  md:px-18'>
      {/* Logo Section */}
      <Link href='/' className='relative w-48 h-16 block mb-2'>
        <Image
          src='/logo.png'
          alt='Company Logo'
          fill
          className='object-fill object-left'
          priority
        />
      </Link>

      {/* Navigation Menu */}
      <nav className='hidden md:flex items-center space-x-6'>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='text-gray-600 hover:text-black text-[15px] font-medium transition-colors'
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Placeholder */}
      <div className='md:hidden'>{/* Future mobile menu implementation */}</div>
    </header>
  );
}
