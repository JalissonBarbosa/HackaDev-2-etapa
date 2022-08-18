import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #000;

  div {
    display: flex;
  }
`;
const Carousel = () => {
  return <Container>Carousel</Container>;
};

export default Carousel;
