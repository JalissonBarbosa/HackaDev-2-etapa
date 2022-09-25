import React from "react";
import '../botoes.css';


const BotaoAddCarrinho = ({handleNovoItem, obterItem}) => {
    const adicionarItem = ()=>{
        let produto = obterItem()
        handleNovoItem(produto)
    }
    return (
        <div className="">
            <button onClick={adicionarItem} id="botaoAdicionarCarrinho">Adicionar ao Carrinho</button>
        </div>
    );
}
export default BotaoAddCarrinho;