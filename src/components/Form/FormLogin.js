import React from "react"

import './FormLogin.css';
import '../../index.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import InputWithTitle from "../Input/InputWithTitle";
import Button from "../Button/Button";

export default function Form () {
    return (
        <div className="Form">
            <h1>Login com</h1>
            <SocialMedia />
            <InputWithTitle
                title="Usuário" 
                type="text"
                placeholder="Insira seu usuário"
                href="/" />
            <InputWithTitle 
                title="Senha" 
                type="pass"
                placeholder="Insira sua senha"
                link="Esqueceu?"
                href="/" />
            <Button 
                nome="Login"/>
            <div className="footerForm">
                <p>Ainda não se cadastrou?</p>
                <a href="/Cadastro">Cadastre-se agora!</a>
            </div>
        </div>
    )
}