import {React, useEffect} from "react";
import '../botoes.css'

const SelectCor = ({atualizarItem, obterItem}) => {
    const atualizaCor = ()=>{
        let select = document.getElementById("cor")
        let cor = select.options[select.selectedIndex].value;
        atualizarItem("cor", cor);
    }
    const defineSelect =()=>{
        let item = obterItem()
        let select = document.getElementById("cor")
        let option = select.options;
        for (let i = 0; i < option.length; i++) {
            if(option[i].value === item.cor){
                let selecionado = select.options[select.selectedIndex];
                selecionado.removeAttribute("selected")
                let option1 = select.getElementsByTagName("option")
                option1[i].setAttribute("selected", "")
            }
            
        }
    }     
    useEffect(()=>{
        defineSelect()
    })
    return (
        <div className="">
            <select onChange={atualizaCor} className="cor" id="cor">
                <option value="preto" selected disabled>Cor</option>
                <option value="rosa">Rosa</option>
                <option value="verde">Verde</option>
                <option value="preto">preto</option>
                </select>
        </div>
    );
}

export default SelectCor;