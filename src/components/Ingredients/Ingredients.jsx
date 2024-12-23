import { FaMinus } from "react-icons/fa";
import "./Ingredients.css";
import { get_all_ingredients } from "../../services/ingredient_service";
import { useEffect, useState } from "react";

export default function Ingredients({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return <p>Aucun ingrédient disponible.</p>;
  }

  return (
    <div className="card-ingredient-container">
      {ingredients.map((ingredient, index) => (
        <div className="card-ingredient" key={index}>
          <img
            src={ingredient.image_url}
            alt={ingredient.original || ingredient.name}
            className="card-image"
          />
          <div className="card-ingredient-content">
            <h3>{ingredient.original || ingredient.name}</h3>
            <button className="ingredient-btn">
              <FaMinus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
