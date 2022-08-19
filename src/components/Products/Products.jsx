import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  margin-top: 120px;
  max-width: 1200px;
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
    <div>
      <Container>
        <Card dir="assets/img/products/product-001.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-002.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-003.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-004.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-005.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-006.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-007.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-008.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
        <Card dir="assets/img/products/product-009.jpg" border="1">
          <p>
            <strong>Camiseta Teste</strong> <br />
            <s>R$ 89,90</s> R$ 74,99
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default Products;
