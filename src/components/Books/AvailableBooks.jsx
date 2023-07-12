import React from "react";
import { styled } from "styled-components";
import Card from "../UI/Card";
import BookItem from "./BooksItem/BookItem";

const DUMMY_BOOKS = [
  {
    id: 1,
    name: "Meditations",
    description: "Book by Marcus Aurelius.",
    price: 399,
  },
  {
    id: 2,
    name: "The Monk Who Sold His Ferrari",
    description: "Book by Robin Sharma.",
    price: 145,
  },
  {
    id: 3,
    name: "On The Shortness of Life",
    description: "Book by Seneca the Younger.",
    price: 249,
  },
  {
    id: 4,
    name: "Breath",
    description: "Book by James Nestor",
    price: 899,
  },
  {
    id: 5,
    name: "Can't Hurt Me",
    description: "Book by David Goggins",
    price: 280,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <BooksListContainer>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </BooksListContainer>
  );
};

export default AvailableBooks;

const BooksListContainer = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
