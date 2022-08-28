import React from "react";

// importação de estilos
import './Login.css';

// Importação de componentes
import Navbar from "../../Nav/Navbar";
import FormLogin from '../../Form/FormLogin';

// Importação de imagens
import loginPromo from '../../images/loginPromo.png';

export default function Login () {
    return (
        <div className="background">
            <Navbar id="header"/>
            <div className="bloco" id="left">
                <img className="login" src={loginPromo} alt="loginPromo"></img>
            </div>
            <div className="bloco" id="right">
                <FormLogin />
            </div>
        </div>
    )
}