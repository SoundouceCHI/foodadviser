import React, { createContext, useState, useContext } from 'react';

export const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  
  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);
