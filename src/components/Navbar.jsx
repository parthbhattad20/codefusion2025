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

 

const productItems = [
  { name: 'Vaultix', href: '/products/vumas' },
  { name: 'Phishinstinct', href: '/products/phishinstinct' },
  { name: 'Kloudraksha', href: '/products/kloudraksha' },
  { name: 'Vcrypt', href: '/products/vcrypt' },
];



const serviceItems = [
  { name: 'Virtual CISO', href: '/services/virtual-ciso' },
  { name: 'GRC Advisory and Audit', href: '/services/grc-advisory' },
  { name: 'Cloud Security', href: '/services/cloud-security' },
  { name: 'Application Security', href: '/services/application-security' },
  { name: 'Network Security', href: '/services/network-security' },
  { name: 'Cyber Forensics', href: '/services/cyber-forensics' },
  { name: 'VAPT', href: '/services/vapt' },
  { name: 'Red Teaming', href: '/services/red-teaming' },
  { name: 'Phishing Simulation', href: '/services/phishing-simulation' },
  { name: 'IoT Security', href: '/services/iot-security' },
  { name: 'AI Soc', href: '/services/ai-soc' },
];

  return (
    <>
      
<Link
  href="/"
  className={`fixed top-4 left-[5%] z-50 transition-opacity duration-300 m-3 hidden lg:flex gap-2 items-center ${
    isScrolled ? "opacity-0" : "opacity-100"
  }`}
>
  <Image
    src={theme === "light" ? "/assets/vulnuris_logo_full1.png" : "/assets/vulnuris.png"}
    alt="Vulnuris logo"
    width={256}
    height={74}
    priority
    className="object-contain"
  />
</Link>


      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-3/4 xl:w-[1000px]">
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
             
{['About', 'Products', 'Services', 'Soc', 'Contact', 'Blogs'].map((item) => {
  const path = `/${item.toLowerCase()}`;
  const isActive = pathname === path;


//  Products dropdown 
if (item === 'Products') {
  return (
    <li key={item} className="relative group">
      <Link
        href="/products"
        className="lg:px-1 py-2 text-lg lg:text-sm font-medium"
      >
        Products
        <span
          className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ${
            pathname.startsWith('/products')
              ? 'scale-x-100'
              : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </Link>

      {/* PRODUCTS DROPDOWN */}
      <div className="absolute left-1/2 top-full z-50 hidden group-hover:block -translate-x-1/2 pt-4">
        <div className="w-[260px] rounded-2xl bg-background border shadow-xl p-4">
          <div className="flex flex-col gap-1 items-center">
            {productItems.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                // className="block rounded-lg px-4 py-2 text-sm font-medium
                //            transition-colors hover:bg-primary/10 hover:text-primary  "
                className="w-full text-center rounded-lg px-4 py-2 text-sm font-medium
           transition-colors hover:bg-primary/10 hover:text-primary"

              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

  //  Services dropdown

  if (item === 'Services') {
  return (
    <li key={item} className="relative group">
      <Link
        href="/services"
        className="lg:px-1 py-2 text-lg lg:text-sm font-medium"
      >
        Services
        <span
          className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ${
            pathname.startsWith('/services')
              ? 'scale-x-100'
              : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </Link>

      {/*  MEGA MENU */}
      <div className="absolute left-1/2 top-full z-50 hidden group-hover:block -translate-x-1/2 pt-4">
        <div className="w-[700px] rounded-2xl bg-background border shadow-xl p-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            
             {serviceItems.map((service) => (
  <Link
    key={service.name}
    href={service.href}
    className="w-full text-left rounded-lg px-4 py-2 text-sm font-medium
           transition-colors hover:bg-primary/10 hover:text-primary"

  >
    {service.name}

    {/* underline */}
    <span
      className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary
                 scale-x-0 hover:scale-x-100
                 transition-transform duration-300 origin-left"
    />
  </Link>
))}
          </div>
        </div>
      </div>
    </li>
  );
}
  //  Normal menu items
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
