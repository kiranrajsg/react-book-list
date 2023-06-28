import React from 'react';

const BookList = () => {
  const books = [
    {
      title: 'the power of subconscious mind',
      author: 'joseph murphy',
      genre: 'self help',
    },
    {
      title: 'The diary of young girl',
      author: 'anne frank',
      genre: 'auto biography',
    },
    {
      title: 'Three Men in a Boat',
      author: 'jerome k.jerome',
      genre: 'comedy novel',
    },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
