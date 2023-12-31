import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import { styled } from "styled-components";

const Backdrop = (props) => {
  return <BackdropContainer onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalOverlayContainer>
      <ModalOverlayContent>{props.children}</ModalOverlayContent>
    </ModalOverlayContainer>
  );
};

// const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    // <Fragment>
    //   {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
    //   {ReactDOM.createPortal(
    //     <ModalOverlay>{props.children}</ModalOverlay>,
    //     document.getElementById("overlay")
    //   )}
    // </Fragment>
    <Fragment>
      <Backdrop onClick={props.onClick} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlayContainer = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalOverlayContent = styled.div``;
