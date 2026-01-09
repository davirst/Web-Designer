import React from "react";
import Footer from "../../Components/Footer/footer.tsx";
import MenuButton from "../../Components/Buttons/buttons.tsx";
import Header from "../../Components/Header/header.tsx";
import sausageImage from "../Recipes/CSS/ss.jpg";
import eggImage from "../Recipes/CSS/egg.jpg";
import baconImage from "../Recipes/CSS/bacon.jpg";

function RecipePage() {
    return (
        <>
            <MenuButton />
            <Header text="Recipes" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">

                {/* Sausage Card */}
                <div className="group bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="h-48 bg-gradient-to-br from-red-300 to-orange-400 flex items-center justify-center">
                        <img alt="Sausage Image" src={sausageImage} className="w-full h-full"/>
                    </div>

                    <div className="p-6 bg-white bg-opacity-95">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">SAUSAGE</h2>
                        <p className="font-semibold text-gray-700 mb-3">Instructions:</p>
                        <div className="space-y-3 text-gray-600">
                            <p><span className="font-semibold text-orange-600">First:</span> Preheat grill to medium-low.</p>
                            <p><span className="font-semibold text-orange-600">Second:</span> Add sausage.</p>
                            <p><span className="font-semibold text-orange-600">Third:</span> Cook covered for 15-20 minutes or until sausage is browned and internal temperature is 160°F, turning links often.</p>
                        </div>
                    </div>
                </div>

                {/* Egg Card */}
                <div className="group bg-gradient-to-br from-yellow-300 to-amber-400 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="h-48 bg-gradient-to-br from-yellow-200 to-amber-300 flex items-center justify-center">
                        <img alt="Egg Image" src={eggImage} className="w-auto h-full"/>
                    </div>
                    <div className="p-6 bg-white bg-opacity-95">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">EGG</h2>
                        <p className="font-semibold text-gray-700 mb-3">Instructions:</p>
                        <div className="space-y-3 text-gray-600">
                            <p><span className="font-semibold text-amber-600">First:</span> Spray small non-stick skillet with cooking spray. Heat skillet over medium heat.</p>
                            <p><span className="font-semibold text-amber-600">Second:</span> Break eggs into skillet. Cook until done as desired.</p>
                            <p><span className="font-semibold text-amber-600">Third:</span> Transfer eggs to plate, yolk up. Season with salt and pepper.</p>
                        </div>
                    </div>
                </div>

                {/* Bacon Card */}
                <div className="group bg-gradient-to-br from-pink-400 to-red-500 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="h-48 bg-gradient-to-br from-pink-300 to-red-400 flex items-center justify-center">
                        <img alt="Bacon Image" src={baconImage} className="h-full"/>
                    </div>
                    <div className="p-6 bg-white bg-opacity-95">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">BACON</h2>
                        <p className="font-semibold text-gray-700 mb-3">Instructions:</p>
                        <div className="space-y-3 text-gray-600">
                            <p><span className="font-semibold text-red-600">First:</span> Line a microwave-safe plate with 2 layers of paper towels.</p>
                            <p><span className="font-semibold text-red-600">Second:</span> Lay out bacon strips without overlapping. Cover with 2 more paper towels.</p>
                            <p><span className="font-semibold text-red-600">Third:</span> Cook in microwave on high to desired crispness, 4 to 6 minutes.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default RecipePage;