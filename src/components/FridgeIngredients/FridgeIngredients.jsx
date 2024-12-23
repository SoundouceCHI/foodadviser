import { useContext, useEffect, useState } from "react";
import fridge from "../../assets/fridge.jpg";
import "./FridgeIngredients.css"
import Ingredients from "../Ingredients/Ingredients";
import { AppContext } from '../../context/AppContext';
import { categorizeIngredients } from "../../utils/ingredientsUtils";

export default function FridgeIngredients() {

  const { sharedVariable, loading, error } = useContext(AppContext);
  const [categorized, setCategorized] = useState({ inFridge: [], toBuy: [] });

  //ingredient in fridge 
  //must be returned from backend 
  const ingIA = [
    { name: "peppers" },
    { name: "salmon" },
    { name: "lime" },
  ];  

  useEffect(() => {
    if (!loading && !error) {
      const result = categorizeIngredients(sharedVariable, ingIA);
      setCategorized(result);
    }
  }, [sharedVariable, loading, error]);
  
  return (
    
    <div className="fridge-page">
          <div className="photo-section">
          <div className="container"> 
        <h2 className="title-fridge-ingredient">Fridge Photo</h2>
        <img className="img-fridge-photo"
          src="/src/assets/fridge.jpg" 
          alt="Fridge" 
        />
      </div>
          </div>
          <div className="ingredients-section">
            {loading ? (
              <div className="loading">Chargement...</div>
            ) : error ? (
              <div className="error">Erreur : {error.message}</div>
            ) : (
              <>
                <h2>Vous avez comme ingrédient : </h2>
                <Ingredients ingredients={categorized.inFridge} />
              </>
             
            )}
          </div>
        </div>
    );
  }
  