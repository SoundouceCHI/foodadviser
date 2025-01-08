import axios from 'axios';
 
const API_BASE_URL = 'http://127.0.0.1:8000'; 

// Obtenir une recette par ID
export const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/${recipeId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return { error: error.message };
  }
};

// Obtenir la liste des recettes
export const getRecipesList = async (number = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/list/?number=${number}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes list:', error);
    return { error: error.message };
  }
};

export const getRecipesSuggestionList = async (ingredientList, number=8)=> {
  try {
    const ingredients= ingredientList.join(',+')
    const url = `${API_BASE_URL}/recipes/recipesSuggestion/?list=${ingredients}&number=${number}`;
    console.log("Request URL:", url);
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes list:', error);
    return { error: error.message };
  }
}

// Autocomplétion des recettes
export const getRecipesAutocomplete = async (query, number = 10) => {
try {
  const response = await axios.get(
    `${API_BASE_URL}/get_recipes/autocomplete/?query=${query}&number=${number}`
  );
  return response.data;
} catch (error) {
  console.error('Error fetching autocomplete recipes:', error);
  return { error: error.message };
}
};

// Upload d'image
export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/image_manager/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’image :', error);
    return { error: error.message };
  }
};
