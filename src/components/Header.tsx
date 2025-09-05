import React from 'react';
import { Button } from './ui/button';

export default function Header() {
  const menuItems = [
    '회사소개', '사업영역', '지속가능경영', 'ESG', 'IR정보', '채용'
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">samyang</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language/Search */}
          <div className="flex items-center space-x-4">
            <select className="text-sm border-none bg-transparent text-gray-700">
              <option>KOR</option>
              <option>ENG</option>
            </select>
            <Button variant="ghost" size="sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
