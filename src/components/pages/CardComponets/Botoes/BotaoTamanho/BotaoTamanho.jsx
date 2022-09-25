import {React, useEffect} from 'react';
import '../botoes.css'

const BotaoTamanho = ({atualizarItem, obterItem}) => {
    const defineSelect =()=>{
        let item = obterItem()
        let select = document.getElementById("selectTamanho")
        let option = select.options;
        for (let i = 0; i < option.length; i++) {
            if(option[i].value === item.tam){
                let selecionado = select.options[select.selectedIndex];
                selecionado.removeAttribute("selected")
                let option1 = select.getElementsByTagName("option")
                option1[i].setAttribute("selected", "")
            }
            
        }       
        }
    const atualizaTamanho =()=>{
        let select = document.getElementById("selectTamanho")
        console.log(select);
        let tamanho = select.options[select.selectedIndex].value;
        atualizarItem("tam", tamanho);
    }
    useEffect(()=>{
        defineSelect()
    })
    return (
        <div className="">
            <select className="tamanho"onChange={atualizaTamanho} id="selectTamanho"  >
                <option value="default" disabled selected >Tamanho</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
                </select>
        </div>
    );
    
}
    
export default BotaoTamanho;