import React from "react";
import { styled } from "styled-components";

const Input = (props) => {
  return (
    <InputContainer>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        id={props.input.id}
        {...props.input}
      />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
