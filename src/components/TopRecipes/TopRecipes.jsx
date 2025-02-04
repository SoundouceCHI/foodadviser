import React, { useEffect, useState } from 'react';
import './TopRecipes.css';
import authService from '../../services/authentication_service';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TopRecipes() {
  const [recipes, setRecipes] = useState([]); // State pour stocker les recommandations
  const [error, setError] = useState(null); // State pour gérer les erreurs
  const [loading, setLoading] = useState(true); // State pour gérer le chargement

  useEffect(() => {
    const fetchRecommendations = async () => {
      const token = authService.getAccessToken();

      // Si l'utilisateur n'est pas connecté, ne pas faire de requête et ne rien afficher
      if (!token) {
        setLoading(false); // Terminer le chargement si l'utilisateur n'est pas connecté
        return;
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/recommandations/recommend_recipes/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecipes(response.data.recommended_recipes);
      } catch (err) {
        console.error(err);
        setError('Impossible de récupérer les recommandations.');
      } finally {
        setLoading(false); // Terminer le chargement après la requête
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  if (!authService.getAccessToken()) {
    return null; // Ne rien afficher si l'utilisateur n'est pas connecté
  }

  return (
    <div className="container">
      <h2>Top Recettes</h2>
      {error && <p className="errorLabel">{error}</p>}
      
      <div className="card-container">
      
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            
            <div className="card-topRecipes" key={recipe.id}>
              
              <img src={recipe.image} alt={recipe.title} />
              <div className="description-topRecipes"><Link key={recipe.id} 
                to={{
                  pathname: `/recipes/${recipe.id || recipe.id}`,
                  search: `?from=TopRecipes&missedIng=${encodeURIComponent(
                    JSON.stringify(recipe.missedIngredients || [])
                  )}`,
                }}>
                <h3 className="cardTitle-topRecipes">{recipe.title}</h3>
                <p className="text-muted">Nombre de personnes : {recipe.servings || "Non spécifié"}</p>
                <p className="text-muted">
                  Résumé :{' '}
                  {recipe.summary ? (
                    recipe.summary.length > 200
                      ? `${recipe.summary.substring(0, 150)}...` // Tronquer à 150 caractères
                      : recipe.summary
                  ) : (
                    "Aucun résumé disponible."
                  )}
                </p>
            
            </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune recommandation disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
}
