import React, { useEffect } from "react";
import './BotaoQuantidade.css'

const BotaoQuantidade = ({atualizarItem, obterItem}) => {
const item = obterItem();
let a = item.quantidade;
let limite = item.limite

const atualizaValor= ()=>{
    let num = document.querySelector(".num")
    let valor =  num.innerText
    atualizarItem("quantidade", Number(valor))
}

const plus = () => {
    let num = document.querySelector(".num")
    if (a < limite){
        a++;
        num.innerText = a;
        atualizaValor()
    }
};

const minus = () => {
    let num = document.querySelector(".num")
    if(a > 1){
        a--;
        num.innerText = a;
        atualizaValor()
    }

};

    return  (
        <div className="wrapper">
        <span onClick={minus} className="minus">-</span>
        <span  className="num">{item.quantidade}</span>
        <span onClick={plus} className="plus">+</span>
        </div>
    )
}
export default BotaoQuantidade;