'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: '입주·이사 청소', href: '/move-in-cleaning' },
    { label: '준공, 사무실 청소', href: '/office-cleaning' },
    { label: '거주청소', href: '/residential-cleaning' },
    { label: '줄눈시공', href: '/grout-construction' },
    { label: '각종코팅', href: '/coating' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className='w-full h-14 md:h-20 bg-white shadow-sm flex items-center justify-between px-4 md:px-18'>
        {/* Logo Section - Smaller on mobile */}
        <Link href='/' className='relative w-28 h-10 md:w-48 md:h-16 block md:mb-2'>
          <Image
            src='/logo.png'
            alt='Company Logo'
            fill
            className='object-fill object-left'
            priority
          />
        </Link>

        {/* Desktop Navigation Menu */}
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

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className='md:hidden p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg transition-colors'
          aria-label='메뉴 열기'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className='flex justify-end p-4'>
          <button
            onClick={closeMobileMenu}
            className='p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg transition-colors'
            aria-label='메뉴 닫기'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className='flex flex-col px-4 py-2'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className='text-gray-700 hover:text-sky-600 hover:bg-sky-50 text-base font-medium py-4 px-4 rounded-lg transition-all border-b border-gray-100 last:border-b-0'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200'>
          <div className='text-center'>
            <p className='text-sm text-gray-500 mb-2'>문의하기</p>
            <a
              href='tel:010-2880-1814'
              className='text-sky-600 font-semibold text-lg hover:text-sky-700 transition-colors'
            >
              010-2880-1814
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
