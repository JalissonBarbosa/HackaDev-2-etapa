import React from "react";

import Caracteristicas from "./Caracteristicas/Caracteristicas";
import InfoInicial from "./InfoInicial/InfoInicial";
import Botoes from "./Botoes/Botoes";
import "./telacard.css";
import Carousel from "../../Content/Carousel";
import Navbar from "../../Nav/Navbar";
import Footer from "../../Footer/Footer"

const TelaCard = () => {
    return (

        <div className="telacard">
        <Navbar />
        <div className="teladisplayflex">
        <div className="divcarousel">
        <Carousel />
        </div>
        <div className="nomebtn">
        <InfoInicial />
        <Botoes />
        </div>
        </div>
        <Caracteristicas />
        <Footer />
        </div>
     
    );
}

export default TelaCard;