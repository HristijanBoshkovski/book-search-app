import React, { useState } from 'react';

import '../styles/app.scss';
import { DataContext } from './Context';
import Books from './Books';
import Search from './Search';
import Footer from './Footer';
import DarkMode from './DarkMode';

export default function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <DataContext.Provider value={{ query, setQuery, data, setData, loading, setLoading }}>
        <DarkMode />
      <div className="app">
        <Search />
        <Books />
        <Footer />
      </div>
    </DataContext.Provider>
  );
}