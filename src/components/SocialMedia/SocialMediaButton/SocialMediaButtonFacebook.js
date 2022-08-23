import React from "react";

import './SocialMediaButtonFacebook.css';

import Facebook from '../../images/facebook.png';

export default function SocialMediaButtonFacebook() {
    return (
        <div className="SocialMediaButtonFacebook">
            <img src={Facebook}></img>
            <label>Facebook</label>
        </div>
    )
}