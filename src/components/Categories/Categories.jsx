import React from "react";
import styled from "styled-components";
import Card from "../Card/CardCategories";

const Container = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Categories = () => {
  return (
    <>
      <p>Categories</p>
      <Container>
        <Card>Card1</Card>
      </Container>
    </>
  );
};

export default Categories;
