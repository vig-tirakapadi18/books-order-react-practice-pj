import React, { Fragment } from "react";
import booksImg from "../../assets/bgimage.jpg";
import { styled } from "styled-components";
import CartButton from "../UI/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <HeaderContainer>
        <h1>VigBooksApp</h1>
        <CartButton onClick={props.onShowCart} />
      </HeaderContainer>
      <ImageContainer>
        <Img
          src={booksImg}
          alt="Books"
        />
      </ImageContainer>
    </Fragment>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #263a29;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
