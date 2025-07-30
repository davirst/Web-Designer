import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from "./Pages/Home/main";
import NutritionPage from "./Pages/Nutrition/nutrition";
import RecipePage from "./Pages/Recipes/recipes";


const App = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/nutrition',
    element: <NutritionPage />,
  },
  {
    path: '/recipes',
    element: <RecipePage />,
  },
]);

export default App;
