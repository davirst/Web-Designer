import React from 'react';
import {Button} from "@mui/material";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Maplayout from "../../Components/Maplayout/maplayout";
import MenuButton from "../../Components/Buttons/buttons"
import breakfastImage from "./picsofbreakfast.jpg";

function MainPage() {
    return (
        <>
            <MenuButton />
            <Header />

            <div id = "breakfast">
                <img src={breakfastImage} alt="" useMap="#tablet_area"/>
            </div>

            <Button onClick={() => alert('Hidden items in the picture')} variant="outlined">
                Hint
            </Button>

            <Maplayout />
            <Footer />
        </>
    )
}

export default MainPage;
