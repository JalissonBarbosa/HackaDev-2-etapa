import React from "react";

// importação de estilos
import './Cadastro.css';

// Importação de componentes
import Navbar from "../../Nav/Navbar";
import FormCadastro from '../../Form/FormCadastro';

// Importação de imagens
import cadastroPromo from '../../images/cadastroPromo.png';

export default function Cadastro () {
    return (
        <div className="Cbackground">
            <Navbar id="Cheader"/>
            <div className="Cbloco" id="Cleft">
                <FormCadastro />
            </div>
            <div className="Cbloco" id="Cright">
                <img className="cadastroPromo" src={cadastroPromo} alt="cadastroPromo"></img>
            </div>
        </div>
    )
}