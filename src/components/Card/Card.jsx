import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #666;
`;

const Product01 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-001.jpg") top center/cover;
`;

const Product02 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-002.jpg") top center/cover;
`;

const Product03 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-003.jpg") top center/cover;
`;

const Product04 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-004.jpg") top center/cover;
`;

const Product05 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-005.jpg") top center/cover;
`;

const Product06 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-006.jpg") top center/cover;
`;

const Product07 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-007.jpg") top center/cover;
`;

const Product08 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-008.jpg") top center/cover;
`;

const Product09 = styled(Container)`
  border: 0;
  height: 400px;
  background: url("assets/img/products/product-009.jpg") top center/cover;
`;

const Card = () => {
  return (
    <>
      <Container>
        <Product01></Product01>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product02></Product02>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product03></Product03>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product04></Product04>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product05></Product05>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product06></Product06>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product07></Product07>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product08></Product08>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
      <Container>
        <Product09></Product09>
        <p>
          <strong>Ptoduto Teste</strong>
          <br />
          <s>R$ 89,90</s> R$ 74,99
        </p>
      </Container>
    </>
  );
};

export default Card;
