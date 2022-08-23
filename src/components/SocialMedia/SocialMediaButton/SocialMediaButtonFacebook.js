import React from "react";

import './SocialMediaButtonFacebook.css';

import Facebook from '../../images/facebook.png';

export default function SocialMediaButtonFacebook() {
    return (
        <button className="SocialMediaButtonFacebook">
            <img src={Facebook}></img>
            <p>Facebook</p>
        </button>
    )
}