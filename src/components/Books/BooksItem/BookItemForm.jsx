import React from "react";
import { styled } from "styled-components";
import Input from "../../UI/Input";

const BookItemForm = () => {
  return (
    <Form>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>+ Add</Button>
    </Form>
  );
};

export default BookItemForm;

const Form = styled.form`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #e86a33;
  border: 1px solid #e86a33;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #cb531f;
    border-color: #cb531f;
  }
`;
