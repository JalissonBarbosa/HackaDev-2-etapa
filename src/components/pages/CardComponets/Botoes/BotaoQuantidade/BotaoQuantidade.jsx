import React from "react";
import './BotaoQuantidade.css'

const BotaoQuantidade = () => {
let a = 1;

const plus = () => {
    let num = document.querySelector(".num")
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
};

const minus = () => {
    let num = document.querySelector(".num")
    if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
};

    return  (
        <div className="wrapper">
        <span onClick={minus} className="minus">-</span>
        <span className="num">01</span>
        <span onClick={plus} className="plus">+</span>
        </div>
    )
}
export default BotaoQuantidade;