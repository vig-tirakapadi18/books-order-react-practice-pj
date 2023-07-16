import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);

  return (
    <Button
      className={btnClasses}
      onClick={props.onClick}>
      <CartIcon>
        <FaShoppingCart
          size={20}
          color="black"
        />
      </CartIcon>
      <CartText>Your Cart</CartText>
      <Badge>{numOfCartItems}</Badge>
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
