import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import MenuButton from "../../Components/Buttons/buttons";

function NutritionPage() {
    return (
        <div className="">
            <MenuButton/>
            <Header text="Ficticious Nutritional Information"/>

            <div className="flex h-64 justify-center space-x-6">
                <div className="w-1/5 bg-pink-400 bg-opacity-20 h-64 pl-4 pr-4 flex leading-normal items-center text-5xl
                break-normal border-double border-t-4 border-b-4 border-black hover:text-green-800">
                    <div className="text-[clamp(1.5rem,5vw,3rem)] italic">Remember, you are what you eat.</div>
                </div>

                <div className="justify-items-center w-1/3 h-64">
                    <table
                        className="w-full h-64 table-auto hover:text-green-800 text-center border-double border-t-4 border-black bg-indigo-900 bg-opacity-40">
                        <thead>
                        <tr className="border-dashed border-b-2 border-black">
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Comments</th>
                            <th>Cost</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-dashed border-b-2 border-black">
                            <td>Bacon</td>
                            <td>548</td>
                            <td>
                                Crispy and chewy
                            </td>
                            <td>$3.12</td>
                        </tr>
                        <tr className="border-dashed border-b-2 border-black">
                            <td>Egg</td>
                            <td>155</td>
                            <td>
                                Like the egg when it is fried
                            </td>
                            <td>$2.08</td>
                        </tr>
                        <tr className="border-dashed border-b-2 border-black">
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
            </div>

            <Footer/>
        </div>
)
}

export default NutritionPage;
