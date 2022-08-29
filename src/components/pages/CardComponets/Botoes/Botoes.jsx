import React, {useState, useEffect} from 'react'
import "./botoes.css";
import BotaoTamanho from "./BotaoTamanho/BotaoTamanho";
import SelectCor from "./SelectCor/SelectCor";
import BotaoAddCarrinho from "./BotaoAddCarrinho/BotaoAddCarrinho";
import BotaoQuantidade from "./BotaoQuantidade/BotaoQuantidade";


const Botoes = ({handleNovoItem}) => {
    const dadosProduto = { 
        id:5,
        descricao:"Roupa 1",
        tam:"M",
        quantidade:2,
        cor:"Azul",
        limite:6,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn",
        preco:160
    }

    const handleAlterarItem = (chave, valor)=> {
        dadosProduto [chave] = valor
          } 
          

    return (
        <div className="botoes">
        <BotaoTamanho handleAlterarItem={handleAlterarItem} />
        <SelectCor />
        <BotaoQuantidade />
        <BotaoAddCarrinho handleNovoItem={handleNovoItem} dadosProduto={dadosProduto}/>
        </div>

    );
    
}

export default Botoes;