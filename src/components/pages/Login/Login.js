import React from "react";

// importação de estilos
import './Login.css';

// Importação de componentes
import Form from '../../Form/Form';

// Importação de imagens
import loginPromo from '../../images/loginPromo.png';

export default function Login () {
    return (
        <div className="background">
            <div className="bloco" id="left">
                <img className="loginPromo" src={loginPromo}></img>
            </div>
            <div className="bloco" id="right">
                <Form />
            </div>
        </div>
    )
}