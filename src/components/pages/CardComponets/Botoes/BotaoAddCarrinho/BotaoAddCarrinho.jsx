import React from "react";
import '../botoes.css';
import {v4} from "uuid"

const BotaoAddCarrinho = ({handleNovoItem}) => {
    const adicionarItem = ()=>{
        let produto = {"id":v4(),
        "descricao":"Top com recorte em tela estampa digital",
        "tam":"M",
        "quantidade":2,
        "cor":"Azul",
        "limite":6,
        "imagem":"https://www.kaisan.com.br/media/catalog/product/cache/1/small_image/441x/040ec09b1e35df139433887a97daa66f/t/o/top_com_al_a_de_regulagem_com_vi_s_preto_branco_ref_k3126-c_1_.jpg",
        "preco":(Math.random() * (300 - 100) + 100).toFixed(2)}
        handleNovoItem(produto)
    }
    return (
        <div className="botoes">
            <button onClick={adicionarItem} id="botaoAdicionarCarrinho">Adicionar ao Carrinho</button>
        </div>
    );
}
export default BotaoAddCarrinho;