'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SelectTheme } from './theme-toggler';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const FloatingNavbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      
      <Link 
        href="/" 
        className={`fixed top-4 left-[5%] z-50 transition-opacity duration-300 m-3 hidden lg:flex gap-2 items-center ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {theme === 'light' ? <Image width="126" height="48" className="h-[74px] w-[256px]" src="/assets/vulnuris_logo_full1.png" alt="vulenris logo" /> : <Image width="126" height="48" className="h-[74px] w-[256px]" src="/assets/vulnuris_logo_full2.png" alt="vulenris logo" />}
      </Link>

      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-3/4 xl:w-auto">
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Navbar Container */}
        <div
          className={`flex items-center justify-between lg:gap-6 p-4 lg:py-3 lg:px-6 lg:rounded-full transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? 'bg-foreground/5 backdrop-blur-md dark:bg-white/10 lg:border lg:border-white/10 lg:shadow-lg'
              : ''
          }`}
        >
          {/* Logo - always visible on mobile, conditionally on desktop */}
          <Link href="/" className="lg:hidden">
            <Image width="32" height="32" className="h-8 w-8" src="/assets/vul_logo.png" alt="vulenris logo" />
          </Link>

          <Link
            href="/"
            className={`hidden lg:block flex-shrink-0 transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0 invisible'
            }`}
          >
            <Image width="32" height="32" className="h-8 w-8" src="/assets/vul_logo.png" alt="vulenris logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`fixed inset-0 top-[330px] flex flex-col lg:relative lg:inset-auto lg:flex-row lg:items-center ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
            } transition-transform duration-300 ease-in-out`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8 lg:space-y-0 lg:flex-row lg:items-center gap-4 xl:gap-8">
              {['About', 'Products', 'Services', 'Contact', 'Blogs'].map((item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = pathname === path;

                return (
                  <li key={item} className="relative group">
                    <Link
                      href={path}
                      className="lg:px-1 py-2 text-lg lg:text-sm font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                      <span
                        className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
              {/* Theme Selector - Mobile Only */}
              <li className="lg:hidden">
                <SelectTheme />
              </li>
            </ul>
          </div>

          {/* Divider and Theme Selector - Desktop Only */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <div
              className={`h-5 w-px transition-opacity duration-300 ${
                isScrolled ? 'bg-gray-300 dark:bg-gray-700 opacity-100' : 'opacity-0'
              }`}
            />
            <SelectTheme />
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
