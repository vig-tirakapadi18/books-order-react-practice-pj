import React from "react";
// import cartIcon from "../../assets/cartIcon.svg";
import { styled } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <CartIcon>
        <FaShoppingCart
          size={20}
          color="black"
        />
      </CartIcon>
      <CartText>Your Cart</CartText>
      <Badge>3</Badge>
    </Button>
  );
};

export default CartButton;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #e86a33;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: #cb531f;
  }
`;

const CartIcon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const CartText = styled.span`
  color: black;
`;

const Badge = styled.span`
  background-color: #77361a;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

// #F2E3DB #41644A #263A29 ##E86A33
