import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchRecommend() {
  return (
    <div className='absolute w-full px-2 top-[120%] bg-white rounded-2xl'>
      <header className='p-4 px-2 text-gray-500'>
        <span>추천 검색어</span>
      </header>
      <div>
        <button
          type='button'
          className='flex items-center w-full px-2 py-2 mb-2 text-lg rounded-xl hover:bg-blue-100'
        >
          <FaSearch className='mr-4 text-gray-500' aria-hidden='true' />
          <span>갑상선암종</span>
        </button>
      </div>
    </div>
  );
}
