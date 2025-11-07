import React from 'react';
import {Button} from "@mui/material";
import Footer from "../../Components/Footer/footer.tsx";
import Header from "../../Components/Header/header.tsx";
import Maplayout from "../../Components/Maplayout/maplayout.tsx";
import MenuButton from "../../Components/Buttons/buttons.tsx";
import breakfastImage from "./picsofbreakfast.jpg";

function MainPage() {
    return (
        <div className="flex-auto">
            <MenuButton />
            <Header text="My Idea On Meals" />

            <div className="flex justify-center">
                <img className="rounded-2xl" src={breakfastImage} alt="A list of breakfast items" useMap="#tablet_area"/>
                <Maplayout/>
            </div>

            <div className="flex justify-center pt-2">
                <Button className="hover:!bg-white !text-black !border-black" onClick={() => alert('Hidden items in the picture')} variant="outlined">
                    Hint
                </Button>
            </div>

            <Footer />
        </div>
    )
}

export default MainPage;
