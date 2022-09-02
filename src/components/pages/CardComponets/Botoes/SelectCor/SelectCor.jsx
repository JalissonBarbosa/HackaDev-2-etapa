import React from "react";
import '../botoes.css'

const SelectCor = () => {
    
    return (
        <div className="botoes">
            <select className="cor" id="">
                <option value="00" defaultValue>Cor</option>
                <option value="rosa">Rosa</option>
                <option value="verde">Verde</option>
                </select>
        </div>
    );
}

export default SelectCor;