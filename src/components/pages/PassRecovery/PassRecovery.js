import React from "react";
import '../../../index.css';
import './PassRecovery.css';
import Navbar from "../../Nav/Navbar";
import FormPassRecovery from "../../Form/FormPassRecovery";
import recSenhaPromoA from '../../images/recSenhaPromoA.png';
import recSenhaPromoB from '../../images/recSenhaPromoB.png';

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