'use client'; 

import Link from 'next/link';
import { SelectTheme } from './theme-toggler';

const FloatingNavbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-11/12 mx-auto my-4">
      <h1 className="text-2xl font-bold font-secondary">
        <Link href="/">
          VULNERIS
        </Link>
      </h1>
      <ul className="flex items-center gap-8 py-3 px-7 bg-foreground/5 backdrop-blur-sm dark:bg-white/10 rounded-full">
        <li className="relative group">
          <Link href="/" className="">
            Home
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link href="/about" className="">
            About
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link href="/products" className="">
            Products
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link href="/services" className="">
            Services
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link href="/contact" className="">
            Contact
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </li>
      </ul>
      <div className="p-4 bg-foreground/5 backdrop-blur-sm dark:bg-white/10 rounded-full">
        <SelectTheme/>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
