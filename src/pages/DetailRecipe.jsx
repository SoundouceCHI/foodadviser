import React, { useEffect, useState, useContext } from "react";
import { AppContext } from '../context/AppContext';
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/api";
import Ingredients from "../components/Ingredients/Ingredients.jsx";
import RecipeSteps from "../components/RecipeSteps/RecipeSteps.jsx";
import "../styles/DetailRecipe.css";
import { useLocation } from 'react-router-dom';
import { categorizeIngredients } from "../utils/ingredientsUtils";

export default function DetailRecipe() {
  const { recipeId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fromPage = params.get('from');

  console.log('Provenance :', fromPage);
  let isSuggestionPage = fromPage.includes('recipesSuggestion')

  const { ingToShop, ingInFridge} = useContext(AppContext);

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const data = await getRecipeById(recipeId);
        if (data.error) {
          setError(data.error);
        } else {
          setRecipeDetails(data);
        }
      } catch (err) {
        console.error("Error fetching recipe:", err.message);
        setError("Erreur de connexion au serveur");
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!recipeDetails) {
    return <p>Chargement des détails de la recette...</p>;
  }

  const ingredients = recipeDetails.ingredients || [];
  const steps = recipeDetails.steps || [];

<<<<<<< HEAD
  return (
    <div className="container">
      <h2>{recipeDetails.title}</h2>
      <img
        src={recipeDetails.image_url || "default_image_url.jpg"}
        alt={recipeDetails.title}
        className="recipe-image"
      />
      <h3 className="titlee">Ingrédients </h3>
      <Ingredients ingredients={ingredients} />
      {isSuggestionPage && (
=======
  // Extraire les ingrédients et les étapes depuis les détails de la recette
  const ingredients = recipeDetails.extendedIngredients || [];
  const steps =
  recipeDetails.analyzedInstructions.length > 0
    ? recipeDetails.analyzedInstructions[0].steps
    : [];

  const ingRecipeToShop = categorizeIngredients(ingredients, ingToShop)
  const ingRecipeInFridge = categorizeIngredients(ingredients, ingInFridge)

    return (
        <div className="container">
          <h2>{recipeDetails.title}</h2>
          <img
            src={recipeDetails.image || "default_image_url.jpg"}
            alt={recipeDetails.title}
            className="recipe-image"
          /> 
          <h3 className="titlee">Ingrédients </h3>
          <Ingredients ingredients={ingredients} />
          {isSuggestionPage && (
>>>>>>> f741dc6 (improved accessibility of fridge and shopping list data across components)
            <>
              <h3 className="titlee">Ingrédients dans le Frigo</h3>
              <Ingredients ingredients={ingRecipeInFridge.inFridge} />
              <h3 className="titlee">Liste de course</h3>
              <Ingredients ingredients={ingRecipeToShop.toBuy} />
            </>
      )}
      <h3 className="titlee">Étapes </h3>
      <RecipeSteps steps={steps} />
    </div>
  );
}
