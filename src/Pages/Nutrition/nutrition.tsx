import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import MenuButton from "../../Components/Buttons/buttons";

function NutritionPage() {
    return (
        <div className="">
            <MenuButton/>
            <Header text="Ficticious Nutritional Information"/>

            <div className="flex justify-center p-2 pb-12">
              Remember, you are what you eat.
            </div>

            <div className="flex justify-center">
                <table className="text-center bg-indigo-400 w-7/12">
                    <thead>
                    <tr>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Comments</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Bacon</td>
                        <td>548</td>
                        <td>
                            Crispy and chewy
                        </td>
                        <td>$3.12</td>
                    </tr>
                    <tr>
                        <td>Egg</td>
                        <td>155</td>
                        <td>
                            Like the egg when it is fried
                        </td>
                        <td>$2.08</td>
                    </tr>
                    <tr>
                        <td>Sausage</td>
                        <td>258</td>
                        <td>
                            Taste pretty spot-on
                        </td>
                        <td>$4.67</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <Footer/>
        </div>
)
}

export default NutritionPage;
