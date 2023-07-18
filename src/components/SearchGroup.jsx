import React from 'react';
import SearchForm from './SearchForm';
import SearchRecommend from './SearchRecommend';

export default function SearchGroup() {
  return (
    <div className='relative'>
      <SearchForm />
      <SearchRecommend />
    </div>
  );
}
