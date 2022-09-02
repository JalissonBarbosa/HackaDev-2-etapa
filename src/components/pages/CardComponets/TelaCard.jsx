import React from "react";

import Caracteristicas from "./Caracteristicas/Caracteristicas";
import InfoInicial from "./InfoInicial/InfoInicial";
import Botoes from "./Botoes/Botoes";
import "./telacard.css";
import Carousel from "../../Content/Carousel";
import Navbar from "../../Nav/Navbar";


const TelaCard = ({handleNovoItem}) => {
    return (

        <div className="telacard">
        <Navbar />
        <Carousel />
        <InfoInicial />
        <Botoes handleNovoItem={handleNovoItem}/>
        <Caracteristicas />
        </div>
     
    );
}

export default TelaCard;