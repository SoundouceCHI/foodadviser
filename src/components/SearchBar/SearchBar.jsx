import React, { useState } from 'react';
import { getRecipesAutocomplete } from "../../services/api"; 
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false); 
  const [noResults, setNoResults] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (!query) return;

    setLoading(true); 
    setNoResults(false); 

    try {
      const data = await getRecipesAutocomplete(query);
      if (!data.error) {
        if (data.length === 0) {
          setNoResults(true); 
        } else {
          navigate('/search-results', { state: { results: data, query } });
        }
      } else {
        console.error('Erreur lors de la récupération des suggestions :', data.error);
      }
    } catch (error) {
      console.error('Erreur réseau ou autre:', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { 
      handleSearch(e);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setNoResults(false); 
  };

  return (
    <div className="search-bar-container abody">
      <h1 className="search-container-title">On mange quoi Aujourd’hui ?</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <CiSearch className="search-bar-icon" />
        <input
          type="text"
          placeholder="Recherche..."
          value={query}
          onChange={handleChange} 
          onKeyDown={handleKeyPress}
          className="search-bar-input"
        />
      </form>
      {loading && (
        <div className="spinner"> Recherche...</div> 
      )}
      {noResults && !loading && (
        <p>Aucune recette trouvée pour "<strong>{query}</strong>". Essayez un autre terme.</p>
      )}
    </div>
  );  
}
