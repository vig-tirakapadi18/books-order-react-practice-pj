import React from "react";
import { styled } from "styled-components";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <CartItems>
      {[
        { id: "b1", name: "The Obstacle Is The Way", amount: 2, price: 140 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </CartItems>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <Total>
        <span>Total amount</span>
        <span>280</span>
      </Total>
      <ButtonContainer>
        <CloseButton onClick={props.onHideCart}>Close</CloseButton>
        <OrderButton>Order</OrderButton>
      </ButtonContainer>
    </Modal>
  );
};

export default Cart;

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #e86a33;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
`;

const CloseButton = styled(Button)`
  /* font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #e86a33;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem; */
  color: #e86a33;

  &:hover,
  &:active {
    background-color: #77361a;
    border-color: #77361a;
    color: white;
  }
`;

const OrderButton = styled(Button)`
  /* font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #e86a33;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem; */
  background-color: #e86a33;
  color: white;

  &:hover,
  &:active {
    background-color: #77361a;
    border-color: #77361a;
    color: white;
  }
`;
