import React from "react";

import '../index.css'
import './FormPassRecovery.css';
import InputWithTitle from '../Input/InputWithTitle';
import Button from '../Button/Button';

export default function FormPassRecovery() {
    return (
        <div className="FormPassRecovery">
            <h1>Recuperar senha</h1>
            <InputWithTitle
                title="E-mail" 
                type="text"
                placeholder="Digite seu e-mail"
                href="/" />
            <Button nome="Enviar" />
        </div>
    )
}