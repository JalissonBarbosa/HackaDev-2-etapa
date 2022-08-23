import React from "react";

import './SocialMediaButtonGoogle.css';

import Google from '../../images/google.png';

export default function SocialMediaButtonGoogle() {
    return (
        <button className="SocialMediaButtonGoogle">
            <img src={Google}></img>
            <p>Google</p>
        </button>
    )
}