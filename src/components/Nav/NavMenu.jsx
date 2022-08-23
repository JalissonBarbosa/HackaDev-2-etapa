import React from "react";
import styled from "styled-components";

import Rotas from "../Rotas/";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(354px)" : "translateY(0)")};
    top: -300px;
    right: 0;
    width: 100vw;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      border-bottom: solid 1px #ccc;
    }
  }
`;

const NavMenu = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Inicio</a></li>
      <li>About Us</li>
      <li>Feminino</li>
      <li>Masculino</li>
      <li><a href="/Login">LogIn</a></li>
    </Ul>
  );
};

export default NavMenu;
