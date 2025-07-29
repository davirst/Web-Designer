import React from "react";
import BackgroundImage from "./bs.jpg";

function BackgroundTheme() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-transparent">
        <img className="bg-no-repeat flex align-middle items-center blur-0" src={BackgroundImage}/>
        </div>
    )
}

export default BackgroundTheme;