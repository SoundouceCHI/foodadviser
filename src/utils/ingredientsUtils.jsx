import { get_ingredients_by_id } from "../services/ingredient_service.jsx"; 

export function categorizeIngredients_(recipeIngredients, fridgeIngredients) {
    const inFridge = [];
    const toBuy = [];
  
    recipeIngredients.forEach((recipeIng) => {
      const found = fridgeIngredients.find(
        (fridgeIng) => fridgeIng.name.toLowerCase() === recipeIng.name.toLowerCase()
      );
  
      if (found) {
        inFridge.push(recipeIng); 
      } else {
        toBuy.push(recipeIng); 
      }
    });
  
    return { inFridge, toBuy };
  }

export function categorizeIngredients(recipeIngredients, fridgeIngredients) {
    const normalize = (str) =>
    str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  
    .trim();  
  
    const inFridge = [];
    const toBuy = [];
  
    recipeIngredients.forEach((recipeIng) => {
      const found = fridgeIngredients.find(
        (fridgeIng) => normalize(fridgeIng.name) === normalize(recipeIng.name)
      );
  
      if (found) {
        inFridge.push(recipeIng);
      } else {
        toBuy.push(recipeIng);
      }
    });
    return { inFridge, toBuy };
}

export function categorizedIng(ingredientsList, fridgeIngredients){
  const normalize = (str) =>
    str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  
    .trim(); 

  const inFridge = [];
  const toBuy = [];
  ingredientsList.forEach(ingredient => {
    const found = fridgeIngredients.find(
      (fridgeIng) => normalize(fridgeIng.name) === normalize(ingredient.name)
    );
    const alreadyInFridge = inFridge.some(
      (ing) => normalize(ing.name) === normalize(ingredient.name)
    );
    
    if(found && !alreadyInFridge){
      inFridge.push(ingredient)
    }else {
      toBuy.push(ingredient)
    }
  })
  return { inFridge, toBuy }
}
async function fetchIngredientDetails(ingredientId) {
  try {
    const response = await get_ingredients_by_id(ingredientId);
    if (response.error) {
      throw new Error(`Erreur lors de la récupération de l'ingrédient : ${response.statusText}`);
    }
    return response
  } catch (error) {
    return null;  
  }
}

export async function mapMissedIngredients(missedIng, allIngredients) {
  const enrichedIngredients = await Promise.all(
    missedIng.map(async (missed) => {
      const ingredientDetails = await fetchIngredientDetails(missed.id);
      if (!ingredientDetails) {
        console.warn(`Aucun détail pour l'ingrédient ID ${missed.id}`);
        return {
          id: missed.id,
          ingredient_name: `Ingrédient inconnu (${missed.id})`,
          image_url: "default_image_url.jpg",
          amount: missed.amount,
          unit: missed.unit || "",
        };
      }  
      const matchedIngredient = allIngredients.find(ingredient => 
        ingredient?.ingredient_name?.toLowerCase() === ingredientDetails?.name?.toLowerCase()
      );      
      return {
        id: missed.id,
        ingredient_name: ingredientDetails.name,
        image_url: ingredientDetails ? ingredientDetails.image : "default_image_url.jpg",
        amount: missed.amount,
        unit: missed.unit || "",
      };
    })
  );

  return enrichedIngredients;
}