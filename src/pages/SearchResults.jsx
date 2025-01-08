import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const { results = [], query } = location.state || {};

  return (
    <div className="search-results-container container">
      <h1>Résultats pour "{query}"</h1>
      {results.length > 0 ? (
        <div className="card-container">
          {results.map((result) => (
            <div key={result.id} className="card card-recipe">
              <img src={result.image_url} alt={result.title || "Recette"} />
              <div className="card-content">
                <Link
                  to={{
                    pathname: `/recipes/${result.id_recipe || result.id}`,
                    search: `?from=SearchResults&missedIng=${encodeURIComponent(
                      JSON.stringify(result.missedIngredients || [])
                    )}`,
                  }}
                >
                  <h3>{result.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé pour votre recherche.</p>
      )}
    </div>
  );
}
