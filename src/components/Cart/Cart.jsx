import React, { Fragment, useContext, useState } from "react";
import { styled } from "styled-components";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderhandler = async (formData) => {
    setIsSubmitting(true);
    await fetch(
      "https://books-data-10a93-default-rtdb.asia-southeast1.firebasedatabase.app/booksOrders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: formData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </CartItems>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <Total>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </Total>
      {isCheckout && (
        <Checkout
          onSubmitOrderData={submitOrderhandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isCheckout && (
        <ButtonContainer>
          <CloseButton onClick={props.onHideCart}>Close</CloseButton>
          {hasItems && <OrderButton onClick={orderHandler}>Order</OrderButton>}
        </ButtonContainer>
      )}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <ButtonContainer>
        <CloseButton onClick={props.onHideCart}>Close</CloseButton>
      </ButtonContainer>
    </Fragment>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
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
