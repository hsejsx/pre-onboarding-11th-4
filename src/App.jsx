import React from 'react';
import SearchGroup from './components/SearchGroup';

function App() {
  return (
    <div className='md:w-1/3 md:min-w-[500px]'>
      <h1 className='mb-4 text-center text-2xl md:text-3xl font-bold leading-10 md:leading-normal'>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchGroup />
    </div>
  );
}

export default App;
