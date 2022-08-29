import React from "react";
import styled from "styled-components";
import Navbar from "../Nav/Navbar";

const SemiBody = styled.div`
  margin-top: 0px;
  max-width: 1200px;
  padding: 0px;
  display: flex;
`;
const Container = styled.div`
  margin-top: 54px;
  max-width: 1200px;
  padding: 5px;
  display: grid;
  grid-template-columns: 2, 1fr;
  grid-gap: 5px;
  display: none;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Checkout = () => {
  return (
    <SemiBody>
      <Navbar />
      <Container>
        <div>Checkout1</div>
        <div>Checkout2</div>
        <div>Checkout3</div>
      </Container>
    </SemiBody>
  );
};

export default Checkout;
