import React from "react";

import '../index.css'
import './Button.css';

export default function Button (props) {
    return (
        <button className="Button">{props.nome}</button>
    )
}