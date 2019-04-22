import React, { useContext, useState, useRef, useEffect } from 'react';

import '../styles/search.scss';
import { DataContext } from './Context';

export default function Search() {
  const { query, setQuery, setData, setLoading } = useContext(DataContext);
  const [isEmpty, setIsEmpty] = useState(false);
  const inputText = useRef();

  useEffect(() => {
    inputText.current.focus();
  });

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKey);
    return () => document.removeEventListener('keydown', handleEnterKey);
  });

  return (
    <form onSubmit={handleSubmit} className="search">
      <label>Book Search App</label>
      <input
        className="search__input--text"
        maxLength="50"
        onChange={handleChange}
        placeholder="You can search either by book title or by author name."
        ref={inputText}
        type="text"
        value={query}
      />
      {query.length !== 0 && <button onClick={handelClick} className="closeBtn">&times;</button>}
      <input className="search__input--submit" type="submit" value="Search" />
      {isEmpty && <span>Error: Please enter a search term</span>}
    </form>
  )

  function handleEnterKey(e) {
    if (e.key === 'Enter') handleSubmit(e);
  }

  function handelClick(e) {
    e.preventDefault();
    setQuery('');
  }

  function handleChange(e) {
    const { value } = e.target;

    setQuery(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!query.length) {
      setIsEmpty(true);
    } else {
      setLoading(true);
      setIsEmpty(false)
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setData(data);
        })
        .catch((err) => {
          console.log(`Fetch api error: ${err}`);
        })
    }
  }
}