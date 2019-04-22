import React, { useContext } from 'react';

import BookItem from './BookItem';
import { DataContext } from './Context';
import Spinner from './Spinner';

import '../styles/books.scss';

export default function Books() {
  const { data, loading } = useContext(DataContext);
  const books = data.items || [];

  if (data.kind && data.totalItems === 0) {
    return <span className="holderText">We could not find the book that you're looking for. Please try again.</span>
  } 

  return (
    <div className="books">
      {loading ? <Spinner /> : !books.length ? 
      <span className="holderText">Please enter your search terms!</span> : <BookItem books={books} />}
    </div>
  )
}