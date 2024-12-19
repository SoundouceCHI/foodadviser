import React, { useEffect, useState } from "react";
import { getRecipesList } from "../../services/api"; // Chemin vers ton fichier api.jsx
import toast from "../../assets/toast.webp";
import "./Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]); // État pour stocker les recettes
  const [error, setError] = useState(null);   // État pour gérer les erreurs

  // Fonction pour charger les recettes depuis l'API
  const fetchRecipes = async () => {
    try {
      const data = await getRecipesList(10); // Récupère 10 recettes (ou nombre souhaité)
      if (data.error) {
        setError(data.error);
      } else {
        setRecipes(data.results || []); // Stocke les résultats dans l'état
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    }
  };

  // Appel à l'API lorsque le composant est monté
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="title-recipes">Nos recettes</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="card-container">
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div key={index} className="card card-recipe">
                <img
                  src={recipe.image || toast} // Image par défaut si absente
                  alt={recipe.title || "Recette"}
                />
                <div className="card-content">
                  <h3>{recipe.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement des recettes...</p>
          )}
        </div>
      </div>
    </>
  );
}
