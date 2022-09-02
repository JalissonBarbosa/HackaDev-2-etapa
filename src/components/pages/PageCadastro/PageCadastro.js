import React from "react";

// importação de estilos
import './PageCadastro.css';

// Importação de componentes
import Navbar from "../../Nav/Navbar";
import FormCadastro from '../../Login/Form/FormCadastro';

// Importação de imagens
import cadastroPromo from '../../Login/images/cadastroPromo.png';

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