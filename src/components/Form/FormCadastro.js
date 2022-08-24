import React from "react";

import './../../index.css';
import './FormCadastro.css';
import InputWithTitle from "../Input/InputWithTitle";

export default function FormCadastro() {
    return (
        <div className="FormCadastro">
            <h1>Cadastre-se</h1>
            <div className="dados">
                <div className="dadosPessoais">
                    <p>Dados pessoais</p>
                    <InputWithTitle
                        title="Nome" 
                        type="text"
                        placeholder="Nome completo"
                        href="/" />
                    <InputWithTitle
                        title="CPF" 
                        type="text"
                        placeholder="CPF"
                        href="/" />
                    <InputWithTitle
                        title="Telefone" 
                        type="text"
                        placeholder="Número de telefone"
                        href="/" />
                    <InputWithTitle
                        title="E-mail" 
                        type="text"
                        placeholder="E-mail"
                        href="/" />
                </div>
                <div className="endereco">
                    <p>Endereço</p>
                    <InputWithTitle
                        title="Rua" 
                        type="text"
                        placeholder="Rua"
                        href="/" />
                    <InputWithTitle
                        title="Cidade" 
                        type="text"
                        placeholder="Cidade"
                        href="/" />
                    <InputWithTitle
                        title="Bairro" 
                        type="text"
                        placeholder="Bairro"
                        href="/" />
                    <InputWithTitle
                        title="CEP" 
                        type="text"
                        placeholder="CEP"
                        href="/" />
                </div>
            </div>
        </div>
    )
}