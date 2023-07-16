import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "../UI/Card";
import BookItem from "./BooksItem/BookItem";
import spinner from "../../assets/spinner.svg";

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchingError, setFetchingError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://books-data-10a93-default-rtdb.asia-southeast1.firebasedatabase.app/books.json"
      );

      if (!response.ok) {
        throw new Error("OOPS...Failed to Fetch!");
      }

      const responseData = await response.json();

      const fetchedBooks = [];

      for (const key in responseData) {
        fetchedBooks.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });

        setBooks(fetchedBooks);
        setIsLoading(false);
      }
    };

    fetchBooks().catch((err) => {
      setIsLoading(false);
      setFetchingError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner>
        <img
          src={spinner}
          alt=""
          width="150"
        />
      </Spinner>
    );
  }

  if (fetchingError) {
    return (
      <FetchError>
        <h3>{fetchingError}</h3>
      </FetchError>
    );
  }

  const booksList = books.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
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
  animation: books-appear 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes books-appear {
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

const Spinner = styled.section`
  text-align: center;
`;

const FetchError = styled.section`
  text-align: center;
  color: #e11d48;
`;
