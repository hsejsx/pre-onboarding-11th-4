import React from 'react';

export default function SearchForm() {
  return (
    <form className='w-full flex'>
      <input
        type='text'
        className='w-full flex-grow py-3 px-4 text-lg bg-white rounded-l-full'
      />
      <button
        type='submit'
        className='flex-grow-0 flex-shrink-0 py-3 px-4 text-lg text-white font-bold bg-[#357ae1] rounded-r-full'
      >
        검색
      </button>
    </form>
  );
}
