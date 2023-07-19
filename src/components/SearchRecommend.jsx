import React from 'react';
import { useSearch } from '../context/SearchContext';
import Keyword from './Keyword';

export default function SearchRecommend() {
  const { keywords } = useSearch();

  return (
    <div className='absolute w-full px-2 top-[120%] bg-white rounded-2xl shadow-lg'>
      <header className='p-4 px-2 text-gray-500'>
        <span>추천 검색어</span>
      </header>
      <div>
        {keywords.length <= 0 && (
          <p className='px-2 mb-2 text-gray-500'>검색어 없음</p>
        )}
        {keywords.length > 0 &&
          keywords.map((keyword, index) => (
            <Keyword key={index} name={keyword} />
          ))}
      </div>
    </div>
  );
}
