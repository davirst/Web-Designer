import React from 'react';
import {Button} from "@mui/material";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Maplayout from "../../Components/Maplayout/maplayout";
import MenuButton from "../../Components/Buttons/buttons"
import breakfastImage from "./picsofbreakfast.jpg";

function MainPage() {
    return (
        <div className="flex-auto">
            <MenuButton />
            <Header text="My Idea On Meals" />

            <div className="flex justify-center">
                <img src={breakfastImage} alt="" useMap="#tablet_area"/>

                <Maplayout/>
            </div>

            <div className="flex justify-center">
                <Button onClick={() => alert('Hidden items in the picture')} variant="outlined">
                    Hint
                </Button>
            </div>

            <Footer />
        </div>
    )
}

export default MainPage;
