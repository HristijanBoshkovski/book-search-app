import React from 'react';

import defaultPic from '../assets/default.png';

export default function BookItem({ books }) {
  return books.map(book => {
    const { id, volumeInfo: { authors, title, publisher, imageLinks, infoLink } } = book;

    return (
      <div className="book" key={id}>
        <img src={displayImageSrc(imageLinks)} alt={title} />
        <div className="book__author">By: {displayAuthor(authors)}</div>
        <div className="book__title">{displayTitle(title)}</div>
        <div className="book__publisher">Published By: {displayPublisher(publisher)}</div>
        <a href={infoLink} target="_blank" rel="noopener noreferrer" className="book__btn">Check this book</a>
      </div>
    )
  })

  function displayImageSrc(imageLinks) {
    return imageLinks ? imageLinks.smallThumbnail : defaultPic;
  }

  function displayAuthor(authors) {
    return authors ? authors.slice(0, 3).join(', ').slice(0, 60) : 'N/A';
  }

  function displayTitle(title) {
    return title ? title.slice(0, 60) : 'N/A';
  }

  function displayPublisher(publisher) {
    return publisher ? publisher.slice(0, 60) : 'N/A';
  }
}