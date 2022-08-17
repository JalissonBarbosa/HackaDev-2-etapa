import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;

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

const Products = () => {
  return (
    <>
      <p>Products</p>
      <Container>
        <Card>Card1</Card>
      </Container>
    </>
  );
};

export default Products;
