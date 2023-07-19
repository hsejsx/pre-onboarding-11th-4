import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../context/SearchContext';

export default function Keyword({ name }) {
  const { saveUserInput } = useSearch();
  return (
    <button
      type='button'
      className='flex items-center w-full px-2 py-2 mb-2 text-lg rounded-xl hover:bg-blue-100 focus:bg-blue-100'
      onClick={() => {
        saveUserInput(name);
      }}
    >
      <FaSearch
        className='mr-4 text-gray-500 flex-shrink-0'
        aria-hidden='true'
      />
      <span className='text-left'>{name}</span>
    </button>
  );
}
