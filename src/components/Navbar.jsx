'use client'; 

import Link from 'next/link';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-2 z-50 border border-gray-200">
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li>
          <Link href="/">
            <span className="hover:text-blue-600 transition duration-200 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-blue-600 transition duration-200 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <span className="hover:text-blue-600 transition duration-200 cursor-pointer">Services</span>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <span className="hover:text-blue-600 transition duration-200 cursor-pointer">Products</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-blue-600 transition duration-200 cursor-pointer">Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FloatingNavbar;
