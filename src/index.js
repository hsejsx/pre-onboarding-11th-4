import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HttpClient } from './apis/httpClient';
import { SearchService } from './service/SearchService';
import { SearchProvider } from './context/SearchContext';
import { LocalSearchRepository } from './repository/LocalSearchRepository';

const root = ReactDOM.createRoot(document.getElementById('root'));
const httpClient = new HttpClient('http://localhost:4000/sick?q=');
const localSearchRepository = new LocalSearchRepository();
const searchService = new SearchService(httpClient);

root.render(
  <React.StrictMode>
    <SearchProvider
      searchService={searchService}
      localSearchRepository={localSearchRepository}
    >
      <App />
    </SearchProvider>
  </React.StrictMode>
);
