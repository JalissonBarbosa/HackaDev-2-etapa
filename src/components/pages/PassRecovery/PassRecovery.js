import React from "react";
import '../../../index.css';
import './PassRecovery.css';
import Navbar from "../../Nav/Navbar";
import FormPassRecovery from "../../Form/FormPassRecovery";

export default function PassRecovery() {
    return (
        <div className="PRbackground">
            <Navbar id="header"/>
            <div className="PRbloco" id="PRleft">
                <p>IMAGEM</p>
            </div>
            <div className="PRbloco" id="PRmid">
                <FormPassRecovery />
            </div>
            <div className="PRbloco" id="PRright">
                <p>IMAGEM</p>
            </div>
        </div>
    )
}