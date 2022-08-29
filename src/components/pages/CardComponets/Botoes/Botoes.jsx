import React from "react";
import "./botoes.css";
import BotaoTamanho from "./BotaoTamanho/BotaoTamanho";
import SelectCor from "./SelectCor/SelectCor";
import BotaoAddCarrinho from "./BotaoAddCarrinho/BotaoAddCarrinho";
import BotaoQuantidade from "./BotaoQuantidade/BotaoQuantidade";


const Botoes = () => {
    return (
        <div className="botoes">
        <BotaoTamanho />
        <SelectCor />
        <BotaoQuantidade />
        <BotaoAddCarrinho />
        </div>

    );
}

export default Botoes;