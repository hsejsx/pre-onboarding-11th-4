import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);
export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children, searchService }) {
  const [keywords, setKeywords] = useState([]);
  const [timerId, setTimerId] = useState(null);
  const [userInput, setUserInput] = useState('');

  const saveUserInput = (name) => {
    setUserInput(name);
    delaySearch(name);
  };

  const search = searchService.search.bind(searchService);

  const delaySearch = (name) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (!name) {
      setKeywords([]);
      return;
    }

    const newTimerId = setTimeout(() => {
      search(name)
        .then((result) => {
          setKeywords(result);
        })
        .catch((error) => {
          console.error('API 요청 에러:', error);
        });
    }, 1000);

    setTimerId(newTimerId);
  };

  return (
    <SearchContext.Provider value={{ keywords, userInput, saveUserInput }}>
      {children}
    </SearchContext.Provider>
  );
}
