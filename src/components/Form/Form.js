import React from "react"

import './Form.css';
import '../../index.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import InputWithTitle from "../Input/InputWithTitle";

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
        </div>
    )
}