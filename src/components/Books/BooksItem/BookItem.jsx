import React from "react";
import { styled } from "styled-components";
import BookItemForm from "./BookItemForm";

const BookItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <ListItem>
      <div>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <BookItemForm />
      </div>
    </ListItem>
  );
};

export default BookItem;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Name = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #e86a33;
  font-size: 1.25rem;
`;
