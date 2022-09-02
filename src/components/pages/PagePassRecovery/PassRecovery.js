import React from "react";
import './PassRecovery.css';
import Navbar from "../../Nav/Navbar";
import FormPassRecovery from "../../Login/Form/FormPassRecovery.jsx";
import recSenhaPromoA from '../../Login/images/recSenhaPromoA.png';
import recSenhaPromoB from '../../Login/images/recSenhaPromoB.png';

export default function PassRecovery() {
    return (
        <div className="PRbackground">
            <Navbar id="header"/>
            <div className="PRbloco" id="PRleft">
                <img src={recSenhaPromoA} alt="recSenhaPromoA"></img>
            </div>
            <div className="PRbloco" id="PRmid">
                <FormPassRecovery />
            </div>
            <div className="PRbloco" id="PRright">
            <img src={recSenhaPromoB} alt="recSenhaPromoA"></img>
            </div>
        </div>
    )
}