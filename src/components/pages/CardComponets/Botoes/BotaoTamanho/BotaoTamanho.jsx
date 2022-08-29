import React from 'react';
import '../botoes.css'

const BotaoTamanho = ({handleAlterarItem}) => {
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
      let value = document.querySelector("option::selection")
        handleAlterarItem ("tam") 

    }

    
export default BotaoTamanho;