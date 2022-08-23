import React from "react";

import './SocialMedia.css';
import SocialMediaButtonFacebook from "./SocialMediaButton/SocialMediaButtonFacebook";
import SocialMediaButtonGoogle from "./SocialMediaButton/SocialMediaButtonGoogle";

export default function SocialMedia() {
    return (
        <div className="SocialMedia">
            <SocialMediaButtonFacebook />
            <SocialMediaButtonGoogle />
        </div>
    )

}