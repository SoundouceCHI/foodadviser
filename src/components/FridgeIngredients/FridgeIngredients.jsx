import { useContext, useEffect, useState } from "react";
import fridge from "../../assets/fridge.jpg";
import "./FridgeIngredients.css";
import Ingredients from "../Ingredients/Ingredients";
import { AppContext } from '../../context/AppContext';
import { categorizedIng } from "../../utils/ingredientsUtils";
import { getRecipesSuggestionList } from "../../services/api";
import Recipes from "../Recipes/Recipes";
import { useIngredients } from '../../context/IngredientsContext';
import PopUp from "../Popup/PopUp";

export default function FridgeIngredients() {
  const { sharedVariable, loading, error, setInFridge, setToShop } = useContext(AppContext);
  const { ingredients } = useIngredients();
  const [categorized, setCategorized] = useState({ inFridge: [], toBuy: [] });
  const [recipes, setRecipes] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { fridgeImage } = useContext(AppContext);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false); //popup
  const [addedIngredient, setAddedIngredient] = useState("");

  useEffect(() => {
    if (!loading && !error) {
      const result = categorizedIng(sharedVariable, ingredients);  
      setCategorized(result);
    }
  }, [ingredients, sharedVariable, loading, error]);
   
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const addIngredients = (ingredients) => {
    setCategorized((currentState) => {
      const newIngredients = ingredients.filter(
        (ingredient) => !currentState.inFridge.some((ing) => ing.name === ingredient.name)
      );
  
      if (newIngredients.length === 0) {
        return currentState;
      }
  
      //add new ing to inFridge
      return {
        ...currentState,
        inFridge: [...currentState.inFridge, ...newIngredients],
      };
    });
  };

  const handlePopupList = (addedIngredientList) => {
    addIngredients(addedIngredientList)
    togglePopup();
  };

  useEffect(() => {
    if (categorized.inFridge.length > 0) {
      setIsLoading(true)
      const fetchRecipes = async () => {
        setIsLoading(true);
        try {
          const data = await getRecipesSuggestionList(
            categorized.inFridge.map((ing) => ing.name)
          );
          if (data.error) {
            setFetchError(data.error);
          } else {
            setRecipes(data);
          }
        } catch (err) {
          
          if (err.response) {
            setFetchError(`Erreur serveur : ${err.response.status} - ${err.response.data.error || "Erreur inconnue"}`);
          } else if (err.request) {
            setFetchError("Erreur : Impossible de joindre le serveur.");
          } else {
            setFetchError(`Erreur de requête : ${err.message}`);
          }
        } finally {
          setIsLoading(false);
        }
      };

      fetchRecipes();
      setInFridge(categorized.inFridge);
      setToShop(categorized.toBuy);
    }
  }, [categorized, setInFridge, setToShop]);

  const normalizedIngredients = (ingredients || []).map(ingredient => ({
    ingredient_name: ingredient.name, 
    amount: ingredient.amount || '',  
    unit: ingredient.unit || '',     
    image_url: ingredient.image_url || 'default_image_url.jpg', 
  }));
  
  if (loading) {
    return <div>Chargement...</div>;
  }


  return (
    <>
      <div className="fridge-page">
        <div className="photo-section">
          <div className="container">
          <h2>Photo de votre frigo</h2>
              {fridgeImage ? (
                <img src={fridgeImage} alt="Fridge contents" className="img-fridge-photo" />
              ) : (
                <p>Aucune image disponible.</p>
              )}
          </div>
          <div className="ingredients-section">
            {fetchError ? (
            <div className="error">Erreur : {fetchError}</div>
          ) : (
            <>
              <h2>Vous avez comme ingrédient :</h2>
              <Ingredients ingredients={categorized.inFridge}/>
            </>
          )}
            <div>
              <button className= 'btn-added' onClick={togglePopup}>Add ingredien</button>
              <PopUp isOpen={isPopupOpen} close={togglePopup} onSubmit={handlePopupList}/>
            </div>
          </div>
        
        </div>
        {isLoading ? (
          <div>Chargement des recettes...</div>
        ) : categorized.inFridge.length > 0 ? (
          <Recipes listRecipes={recipes} previousPage="recipesSuggestion" />
        ) : (
          <div>Impossible de faire une suggestion de recette sans ingrédient</div>
        )}
      </div>
    </>
  );
}
