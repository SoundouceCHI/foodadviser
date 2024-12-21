import { FaMinus } from "react-icons/fa";
import "./Ingredients.css";

export default function Ingredients({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return <p>Aucun ingrédient disponible.</p>;
  }

  return (
    <div className="card-ingredient-container">
      {ingredients.map((ingredient, index) => (
        <div className="card-ingredient" key={index}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.name || ingredient.title}
            className="card-image"
          />
          <div className="card-ingredient-content">
            <h3>{ingredient.original || ingredient.title}</h3>
            <button className="ingredient-btn">
              <FaMinus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
