import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Recipes from './components/Recipes/Recipes'
import FridgeIngredients from './components/FridgeIngredients/FridgeIngredients'


function App() {

  return (
    <>
     <Navbar/>
      <Recipes/>
      <FridgeIngredients />
     <Footer/>
    </>
  )
}

export default App
