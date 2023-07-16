import { styled } from "styled-components";

const CartItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <ListItem>
      <div>
        <Name>{props.name}</Name>
        <Summary>
          <Price>{price}</Price>
          <Amount>x {props.amount}</Amount>
        </Summary>
      </div>
      <ButtonContainer>
        <Button onClick={props.onRemove}>−</Button>
        <Button onClick={props.onAdd}>+</Button>
      </ButtonContainer>
    </ListItem>
  );
};

export default CartItem;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e86a33;
  padding: 1rem 0;
  margin: 1rem 0;
  max-height: 20rem;
  overflow: scroll;
`;

const Name = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #41644a;
`;

const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  color: #e86a33;
`;

const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #41644a;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    .actions {
      flex-direction: row;
    }
  }
`;

const Button = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: #e86a33;
  border: 1px solid #e86a33;
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;

  &:hover,
  &:active {
    background-color: #e86a33;
    color: white;
  }
`;
