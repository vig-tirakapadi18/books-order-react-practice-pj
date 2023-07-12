import React from "react";
import { styled } from "styled-components";

const BooksSummary = () => {
  return (
    <SummaryContainer>
      <h2>World's Best Books, At Your Doorstep!</h2>
      <p>
        The more that you read, the more things you will know. The more that you
        learn, the more places you’ll go.
      </p>
      <p>
        There is more treasure in books than in all the pirate’s loot on
        Treasure Island.
      </p>
    </SummaryContainer>
  );
};

export default BooksSummary;

const SummaryContainer = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #324437;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`;
