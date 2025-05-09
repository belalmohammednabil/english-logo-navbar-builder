
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, useState] = useState(false);
  
  const navItems = [
    { title: 'الرئيسية', href: '/', isActive: true },
    { title: 'جلسة إرشادية', href: '#', isActive: false },
    { title: 'من نحن', href: '#', isActive: false },
    { title: 'أخبار هولندا', href: '#', isActive: false },
    { title: 'المقالات', href: '#', isActive: false },
    { title: 'تسجيل الدخول', href: '#', isActive: false }
  ];

  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-sm w-full py-4 px-8 rounded-[50px] shadow-lg font-cairo">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo - now on the right side for RTL */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Navigation links - centered in the navbar */}
          <div className="hidden md:flex items-center justify-center space-x-reverse space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.title}
                href={item.href}
                className={`text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-400 transition-colors ${
                  item.isActive ? 'font-bold' : 'font-normal'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button - on the left side for RTL */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
