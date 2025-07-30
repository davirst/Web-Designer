import React from "react";

function Header({text}: {text: string}) {
    return (
        <div className="header-container flex justify-center pt-2 pb-12"> {text} </div>
    )
}

export default Header;