import React, {useState} from "react";
import "./PopUp.css";
import IngredientList from "../IngredientList/IngredientList.jsx";

function PopUp({ isOpen, close,onSubmit, confirmedIngredients}) {

  const handleIngredientAdd = (ingredient) => {
    if (onSubmit) {
      onSubmit(ingredient); // send ing to parent 
    }
  };
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className="popup">
        <div className="popup-header">
          <h2>Ajouter un ingredient:</h2>
          <button onClick={close} className="close-button">Fermer</button>
        </div>
        <div className="popup-content">
          <IngredientList addOrRemoveIng={handleIngredientAdd} confirmedIngredients={confirmedIngredients} />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
