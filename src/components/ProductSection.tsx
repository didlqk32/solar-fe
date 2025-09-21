import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './ui/image-with-fallback';

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: '태양광 시스템',
      description: '태양광 발전 시스템으로 전기를 생산하고 절감합니다.',
      image: 'https://images.unsplash.com/photo-1628919311414-1ee37e9ed8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbm9vZGxlcyUyMGluc3RhbnR8ZW58MXx8fHwxNzU3MDU4ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: '태양광 시스템'
    },
    {
      id: 2,
      title: '태양광 발전 시스템',
      description: '태양광 발전 시스템으로 전기를 생산하고 절감합니다.',
      image: 'https://images.unsplash.com/photo-1704895376570-10be37f41bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1lZGljaW5lJTIwYm90dGxlc3xlbnwxfHx8fDE3NTcwNTg4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: '태양광 발전 시스템'
    },
    {
      id: 3,
      title: '태양광 발전 시스템',
      description: '태양광 발전 시스템으로 전기를 생산하고 절감합니다.',
      image: 'https://images.unsplash.com/photo-1572045930797-ef96a920d6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmb3Jlc3QlMjB0cmVlcyUyMGdyZWVufGVufDF8fHx8MTc1NzA1ODg4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: '태양광 발전 시스템'
    },
    {
      id: 4,
      title: '태양광 발전 시스템',
      description: '태양광 발전 시스템으로 전기를 생산하고 절감합니다.',
      image: 'https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBtYXRlcmlhbHMlMjBmYWN0b3J5fGVufDF8fHx8MTc1NzA1ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: '태양광 발전 시스템'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            한빛쏠라는 언제나<br />
            당신의 곁에 있습니다.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            끊임없는 혁신과 지속 가능한 발전을 통해 모든 이의 행복한 삶을 실현하며, 더 나은 세상을 만들어갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl text-blue-600 mb-2">2000</div>
            <p className="text-gray-600">창립년도</p>
          </div>
          <div>
            <div className="text-4xl text-blue-600 mb-2">ESG</div>
            <p className="text-gray-600">지속 가능 경영</p>
          </div>
          <div>
            <div className="text-4xl text-blue-600 mb-2">Global</div>
            <p className="text-gray-600">글로벌 진출</p>
          </div>
        </div>
      </div>
    </section>
  );
}
