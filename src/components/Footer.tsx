import React from 'react';

export default function Footer() {
  const footerLinks = {
    company: ['회사소개', '경영진', '조직도', '연혁', '계열사'],
    business: ['식품사업', '의약바이오', '패키징', '화학소재', '무역'],
    sustainability: ['ESG경영', '지속가능보고서', '윤리경영', '사회공헌'],
    ir: ['IR자료', '재무정보', '주주정보', '공시정보'],
    careers: ['채용정보', '인재상', '복리후생', '교육제도']
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl text-blue-400">samyang</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              삼양그룹은 혁신과 함께하며<br />
              더 나은 내일을 만들어갑니다.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>서울특별시 영등포구 국제금융로2길 32</p>
              <p>대표전화: 02-2157-9000</p>
              <p>팩스: 02-2157-9001</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-lg">회사소개</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg">사업영역</h4>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg">지속가능경영</h4>
            <ul className="space-y-2">
              {footerLinks.sustainability.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg">채용정보</h4>
            <ul className="space-y-2">
              {footerLinks.careers.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">이용약관</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">사이트맵</a>
            </div>
            <div className="text-gray-400 text-sm">
              Copyright © Samyang Corporation. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Sections */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg mb-4">삼양그룹과 함께할</h3>
              <p className="text-gray-300 mb-4">당신의 역량을 소중하게 여겨 글로벌 기업으로 성장하겠습니다.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">채용정보 →</a>
            </div>
            <div>
              <h3 className="text-lg mb-4">삼양그룹의 투자정보를 확인해보세요</h3>
              <p className="text-gray-300 mb-4">실시간 투자정보와 재무자료를 제공합니다.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">IR정보 →</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
