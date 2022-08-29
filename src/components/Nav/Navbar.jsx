import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 55px;
  background: #fff;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  @media (max-width: 900px) {
    background: #000;
    color: #fff;
  }

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">HackaDev e-Commerce</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
