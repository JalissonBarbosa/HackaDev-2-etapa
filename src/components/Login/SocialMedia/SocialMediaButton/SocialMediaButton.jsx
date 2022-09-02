import React from "react";

import './SocialMediaButton.css';

export default function SocialMediaButton(props) {
    return (
        <button className="SocialMediaButton" id={props.id}>
            <img src={props.img} alt={props.social}></img>
            <p>{props.social}</p>
        </button>
    )
}