import React from "react";

import Caracteristicas from "./Caracteristicas/Caracteristicas";
import InfoInicial from "./InfoInicial/InfoInicial";
import Botoes from "./Botoes/Botoes";
import "./telacard.css";
import Carousel from "../../Content/Carousel";


const TelaCard = () => {
    return (

        <div className="telacard">
        
        <Carousel />
        <InfoInicial />
        <Botoes />
        <Caracteristicas />
        </div>
     
    );
}

export default TelaCard;