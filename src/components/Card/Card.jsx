import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
  border: ${({ border }) => (border === "1" ? "1px solid #666" : "0")};

  div {
    border: 0;
    height: 150vw;
    background: ${({ dir }) => "url(" + dir + ")top center/cover"};
  }

  @media (max-width: 400px) {
    div {
      width: 400px;
      height: 600px;
    }
  }

  @media (min-width: 576px) {
    div {
      width: 48vw;
      height: 72vw;
    }
  }

  @media (min-width: 768px) {
    justify-self: center;

    div {
      width: 32vw;
      height: 48vw;
    }
  }

  @media (min-width: 992px) {
    div {
      width: 23.4vw;
      height: 35.1vw;
    }
  }

  @media (min-width: 1200px) {
    div {
      width: 290px;
      height: 435px;
    }
  }
`;

const Card = ({ dir, border, children }) => {
  return (
    <>
      <Container dir={dir} border={border}>
        <div></div>
        {children}
      </Container>
    </>
  );
};

export default Card;
