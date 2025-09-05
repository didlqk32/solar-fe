import React from 'react';
import { ImageWithFallback } from './ui/image-with-fallback';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1572045930797-ef96a920d6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB0cmVlcyUyMGdyZWVufGVufDF8fHx8MTc1NzA1ODg4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="녹색 숲 항공 촬영"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          삼양은 모두가 행복한<br />
          미래를 그리고 있습니다.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          지속 가능한 성장을 위한<br />
          혁신적인 기술로 더 나은 내일을
        </p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/25 rounded-full"></div>
    </section>
  );
}
