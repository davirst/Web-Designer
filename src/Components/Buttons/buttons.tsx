import React from "react";
import {Button} from "@mui/material";

function MenuButton() {
    return (
        <div className="flex gap-1">
            <Button variant="outlined">Home</Button>
            <Button variant="outlined">Recipes</Button>
            <Button variant="outlined">Nutrition</Button>
        </div>
    )
}

export default MenuButton;