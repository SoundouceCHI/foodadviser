import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/recipes'; // URL de base de ton backend

// Obtenir une recette par ID
export const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${recipeId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return { error: error.message };
  }
};

// Obtenir la liste des recettes
export const getRecipesList = async (number = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list/?number=${number}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes list:', error);
    return { error: error.message };
  }
};
