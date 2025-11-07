import React from "react";
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

function MenuButton() {
    const navigate = useNavigate();

    //When user clicks "To main page" sends them the history page of their personal attendance
    const goToHomePage = async () => {
        navigate('/');
    };
    const goToRecipePage = () => {
        navigate('/recipes');
    };
    const goToNutritionPage = () => {
        navigate('/nutrition');
    };
    return (
        <div className="flex gap-1 justify-end p-2 border-b-2 text-black">
            <Button className="hover:!bg-white !text-black !border-black" variant="outlined" onClick={goToHomePage}>Home</Button>
            <Button className="hover:!bg-white !text-black !border-black" variant="outlined" onClick={goToRecipePage}>Recipes</Button>
            <Button className="hover:!bg-white !text-black !border-black" variant="outlined" onClick={goToNutritionPage}>Nutrition</Button>
        </div>
    )
}

export default MenuButton;