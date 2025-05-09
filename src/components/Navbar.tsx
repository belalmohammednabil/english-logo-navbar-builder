
import React from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Guidance Session', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Choose Holland', href: '#' },
    { title: 'Articles', href: '#' },
    { title: 'Login/Register', href: '#' }
  ];

  return (
    <nav className="bg-white shadow-sm w-full py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu />
            </button>
          </div>
          
          {/* Navigation links - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {item.title}
              </a>
            ))}
          </div>
          
          {/* Logo - always visible */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
