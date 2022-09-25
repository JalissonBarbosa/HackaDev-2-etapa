import React from "react";

import './infoinicial.css';

const InfoInicial = ({obterItem}) => {
    let item = obterItem()
    const preco = Number(item.preco)
    let sPromocao = preco + ((preco/100)*20)
    return (
        <div>
            <h1>{item.descricao}</h1>
            <div className="precos">
            <small>Promoção!</small>
            <s>R${sPromocao.toFixed(2)}</s>
            <h2>R${item.preco}</h2>
            </div>
            
        </div>
    );
}

export default InfoInicial;