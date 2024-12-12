import React from 'react'
import recipeImage from './assets/recipe.png'
import './TopRecipes.css'

export default function TopRecipes() {
  return (
    <div className='container'>
      <h2>Top recettes</h2>
    <div className='card-container'>
      <div className='card-topRecipes'>
        <img src={recipeImage}/>
        <div className='description-topRecipes'>
          <h3 className='cardTitle-topRecipes'>Titre de la recette</h3>
          <p className='detail-topRecipes'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card-topRecipes'>
        <img src={recipeImage}/>
        <div className='description-topRecipes'>
          <h3 className='cardTitle-topRecipes'>Titre de la recette</h3>
          <p className='detail-topRecipes'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card-topRecipes'>
        <img src={recipeImage}/>
        <div className='description-topRecipes'>
          <h3 className='cardTitle-topRecipes'>Titre de la recette</h3>
          <p className='detail-topRecipes'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card-topRecipes'>
        <img src={recipeImage}/>
        <div className='description-topRecipes'>
          <h3 className='cardTitle-topRecipes'>Titre de la recette</h3>
          <p className='detail-topRecipes'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
    </div>
    </div>
  )
}
