import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  margin-top: 120px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Categories = () => {
  return (
    <Container>
      <Card dir="assets/img/categories/feminino.jpg" border="0">
        <p>Feminino</p>
      </Card>
      <Card dir="assets/img/categories/masculino.jpg" border="0">
        <p>Masculino</p>
      </Card>
    </Container>
  );
};

export default Categories;
