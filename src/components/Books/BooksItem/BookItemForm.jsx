import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import Input from "../../UI/Input";

const BookItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && (
        <ErrorMsg>Please enter a valid amount (1-5)!</ErrorMsg>
      )}
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

const ErrorMsg = styled.h4`
  color: #e11d48;
`;
