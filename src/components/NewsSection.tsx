import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './ui/image-with-fallback';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: '한빛쏠라, 2024년 지속가능경영 보고서 발간',
      description: '환경, 사회, 지배구조 전반에 걸친 ESG 경영 성과와 향후 계획을 담았습니다.',
      date: '2024.12.15',
      category: '보도자료',
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzU3MDQ3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: '신제품 출시 기념 이벤트 진행',
      description: '혁신적인 기술로 개발된 신제품 라인업을 소개합니다.',
      date: '2024.12.10',
      category: '제품소식',
      image: 'https://images.unsplash.com/photo-1628919311414-1ee37e9ed8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbm9vZGxlcyUyMGluc3RhbnR8ZW58MXx8fHwxNzU3MDU4ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: '글로벌 파트너십 체결 소식',
      description: '해외 진출 확대를 위한 전략적 파트너십을 발표했습니다.',
      date: '2024.12.05',
      category: '기업소식',
      image: 'https://images.unsplash.com/photo-1704895376570-10be37f41bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1lZGljaW5lJTIwYm90dGxlc3xlbnwxfHx8fDE3NTcwNTg4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: '2025년 태양광 시장 동향',
      description: '2025년 태양광 시장 동향을 분석합니다.',
      date: '2024.12.01',
      category: '시장동향',
      image: 'https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBtYXRlcmlhbHMlMjBmYWN0b3J5fGVufDF8fHx8MTc1NzA1ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            새로운 내일의<br />
            삼양을 만나보세요.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-0">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white text-gray-700">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="mb-3 text-gray-900 line-clamp-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            더 많은 소식 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
