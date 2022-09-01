import React from 'react';
import '../botoes.css'

const BotaoTamanho = () => {
    return (
        <div className="botoes">
            <select className='tamanho' onChange={atualizouSelect}>
                <option value="00" defaultValue>Tamanho</option>
                <option value="p">P</option>
                <option value="m">M</option>
                <option value="g">G</option>
                <option value="gg">GG</option>
                </select>
        </div>
    );
    
}


    const atualizouSelect = () => {
        
        let select = document.querySelector('.tamanho');
        let optionValue = select.options[select.selectedIndex];
        
        let value = optionValue.value;
        let text = optionValue.text;
    }

    
export default BotaoTamanho;