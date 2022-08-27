import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  a{
    text-decoration: none;
    color:#000000;
  }
  li:hover{
    transform: scale(1.1);
    transition: transform 300ms; 
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(354px)" : "translateY(0)")};
    top: -360px;
    right: 0;
    width: 100vw;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      border-bottom: solid 1px #ccc;
    }
    a{
      color:white;
    }
  }
`;

const NavMenu = ({ open}) => {
  
  return (
    
    <Ul open={open}>
      <li>Inicio</li>
      <li>About Us</li>
      <li>Feminino</li>
      <li>Masculino</li>
      <li><Link exact="true" to="/sacola">Sacola</Link></li>
      <li>LogIn</li>
    </Ul>
    
  );
};

export default NavMenu;
