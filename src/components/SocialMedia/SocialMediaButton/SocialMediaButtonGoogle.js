import React from "react";

import './SocialMediaButtonGoogle.css';

import Google from '../../images/google.png';

export default function SocialMediaButtonGoogle() {
    return (
        <div className="SocialMediaButtonGoogle">
            <img src={Google}></img>
            <label>Google</label>
        </div>
    )
}