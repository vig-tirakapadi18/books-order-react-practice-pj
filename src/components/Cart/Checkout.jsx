import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import styles from "./Checkout.module.css";

const isValid = (value) => value.trim() === "";

const isSixChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [nameValidity, setNameValidity] = useState(true);
  const [streetValidity, setStreetValidity] = useState(true);
  const [postalCodeValidity, setPostalCodeValidity] = useState(true);
  const [cityValidity, setCityValidity] = useState(true);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameInputRefValue = nameInputRef.current.value;
    const streetInputRefValue = streetInputRef.current.value;
    const postalInputRefValue = postalInputRef.current.value;
    const cityInputRefValue = cityInputRef.current.value;

    const nameIsValid = isValid(nameInputRefValue);
    const streetIsValid = isValid(streetInputRefValue);
    const postalIsValid = isSixChars(postalInputRefValue);
    const cityIsValid = isValid(cityInputRefValue);

    setNameValidity(!nameIsValid);
    setStreetValidity(!streetIsValid);
    setPostalCodeValidity(!isSixChars);
    setCityValidity(!cityIsValid);

    const formIsValid =
      !nameIsValid && !streetIsValid && !postalIsValid && !cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmitOrderData({
      name: nameInputRefValue,
      street: streetInputRefValue,
      postalCode: postalInputRefValue,
      city: cityInputRefValue,
    });
  };

  return (
    <Form onSubmit={confirmHandler}>
      <Division className={`${nameValidity ? "" : styles.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
        />
        {!nameValidity && <Invalidity>Please enter a valid Name!</Invalidity>}
      </Division>
      <Division className={`${streetValidity ? "" : styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
        />
        {!streetValidity && (
          <Invalidity>Please enter a valid Street!</Invalidity>
        )}
      </Division>
      <Division className={`${!postalCodeValidity ? "" : styles.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="number"
          id="postal"
          ref={postalInputRef}
        />
        {postalCodeValidity && (
          <Invalidity>Please enter a valid Postal Code!</Invalidity>
        )}
      </Division>
      <Division className={`${cityValidity ? "" : styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
        />
        {!cityValidity && <Invalidity>Please enter a valid City!</Invalidity>}
      </Division>
      <ButtonContainer>
        <Button
          type="submit"
          onClick={props.onCancel}>
          Cancel
        </Button>
        <SubmitButton>Confirm</SubmitButton>
      </ButtonContainer>
    </Form>
  );
};

export default Checkout;

const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

const Division = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  font: inherit;
  color: #e86a33;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;

  &:hover,
  &:active {
    background-color: #ffe6dc;
  }
`;

const SubmitButton = styled(Button)`
  border: 1px solid #e86a33;
  background-color: #e86a33;
  color: white;

  &:hover,
  &:active {
    background-color: #77361a;
  }
`;

const Invalidity = styled.p`
  color: #e11d48;
`;
