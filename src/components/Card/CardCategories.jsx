import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
`;

const Feminino = styled(Container)`
  height: 90vh;
  background: url("assets/img/categories/feminino.jpg") top center/cover;
`;

const Masculino = styled(Container)`
  height: 90vh;
  background: url("assets/img/categories/masculino.jpg") top center/cover;
`;

const Card = () => {
  return (
    <>
      <Container>
        <Feminino></Feminino>
        <p>Feminino</p>
      </Container>
      <Container>
        <Masculino></Masculino>
        <p>Masculino</p>
      </Container>
    </>
  );
};

export default Card;
