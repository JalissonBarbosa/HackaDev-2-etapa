import React from "react";
import './SocialMedia.css';
import Facebook from '../images/facebook.png';
import Google from '../images/google.png';
import SocialMediaButton from "./SocialMediaButton/SocialMediaButton";

export default function SocialMedia() {
    return (
        <div className="SocialMedia">
            <SocialMediaButton 
                img={Facebook} 
                social="Facebook" 
                id="Facebook"/>
            <SocialMediaButton 
                img={Google} 
                social="Google" />
        </div>
    )
}