import React from "react";
import Recipes from "../components/Recipes/Recipes";
import TopRecipes from "../components/TopRecipes/TopRecipes";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageManager from "../components/ImageManager/ImageManager";
import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <>
      <div className="aabody">
        <SearchBar/>
        <ImageManager/>
      </div>
      <Recipes limit={4} random={true} />
      <TopRecipes />
    </>
  );
}