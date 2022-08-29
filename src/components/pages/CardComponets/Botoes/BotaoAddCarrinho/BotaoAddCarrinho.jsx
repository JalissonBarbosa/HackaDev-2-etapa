import React from "react";
import '../botoes.css';


export function Produtos({handleNovoItem, dadosProduto}) {
    return (
        <div className="botoes">
            <button onClick={handleNovoItem(dadosProduto)}>Adicionar ao Carrinho</button>
            
        </div>
    );
}