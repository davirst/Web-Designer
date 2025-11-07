import React from "react";
import Footer from "../../Components/Footer/footer.tsx";
import MenuButton from "../../Components/Buttons/buttons.tsx";
import Header from "../../Components/Header/header.tsx";

function RecipePage() {
    return (
        <>
            <MenuButton />
            <Header text="Recipes" />
            <Footer />
        </>
    )
}

export default RecipePage;