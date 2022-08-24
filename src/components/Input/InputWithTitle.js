import React from 'react';

import '../../index.css';
import './InputWithTitle.css';

export default function InputWithTitle (props) {
    return (
        <div className='InputWithTitle'>
            <div className='title'>
                <p>{props.title}</p>
                <a href={props.href}>{props.link}</a>
            </div>
            <input type={props.type} placeholder={props.placeholder}></input>       
        </div>
    )
}

// Declarar:
//      title
//      type
//      placeholder
//
// Se tiver link, declarar também:
//      href
//      link