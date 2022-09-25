import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"


import InfoInicial from "./InfoInicial/InfoInicial";
import Botoes from "./Botoes/Botoes";
import "./telacard.css";
import CarouselCard from "./CarrouselCard/CarrouselCard";
import Navbar from "../../Nav/Navbar";


const TelaCard = ({handleNovoItem, handleGetItens, produto}) => {
     const { id } = useParams();
    const defineItem = ()=>{
            if (id !== undefined) {
                const itens = handleGetItens()
                let result;
                for (let i = 0; i < itens.length; i++) {
                    const dados = itens[i];
                    if (dados.id == id) {
                       result = dados 
                        return result;
                    }
                }
            }else{
                return produto;
            }
        }
        let resultado = defineItem()
    const [item, setItem] = useState(resultado)   

    const obterItem = ()=>{
        return item
    }
    const atualizarItem = (chave, valor)=>{
        let dados = obterItem()
        dados[chave] = valor;
        setItem(dados)
    }
    
    //useEffect(defineItem())
    return (
        <>
        <Navbar />
        <div className="telacard">
        <CarouselCard img={item.imagem} />
        <div className="detalhes">
            <InfoInicial obterItem={obterItem} atualizarItem={atualizarItem} />
            <Botoes handleNovoItem={handleNovoItem} obterItem={obterItem} atualizarItem={atualizarItem} />
        </div>
        
        </div>
     </>
    );
}

export default TelaCard;