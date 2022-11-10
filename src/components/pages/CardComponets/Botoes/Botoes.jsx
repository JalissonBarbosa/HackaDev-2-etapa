import React from "react";
import "./botoes.css";
import BotaoTamanho from "./BotaoTamanho/BotaoTamanho";
import SelectCor from "./SelectCor/SelectCor";
import BotaoAddCarrinho from "./BotaoAddCarrinho/BotaoAddCarrinho";
import BotaoQuantidade from "./BotaoQuantidade/BotaoQuantidade";


const Botoes = ({handleNovoItem, obterItem, atualizarItem}) => {
    return (
        <>
        <div className="botoes">
        <BotaoTamanho atualizarItem={atualizarItem} obterItem={obterItem}/>
        <SelectCor atualizarItem={atualizarItem} obterItem={obterItem}/>
        <BotaoQuantidade atualizarItem={atualizarItem} obterItem={obterItem}/>
        
        </div>
        <div className="addCarrinho">
        <BotaoAddCarrinho handleNovoItem={handleNovoItem} obterItem={obterItem}/>
        </div>
    </>
    );
}

export default Botoes;