import React from 'react'
import recipeImage from './assets/recipe.png'
import './TopRecipes.css'

export default function TopRecipes() {
  return (
    <div className='group'>
      <div className='card'>
        <img src={recipeImage}/>
        <div className='description'>
          <h3 className='cardTitle'>Titre de la recette</h3>
          <p className='detail'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card'>
        <img src={recipeImage}/>
        <div className='description'>
          <h3 className='cardTitle'>Titre de la recette</h3>
          <p className='detail'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card'>
        <img src={recipeImage}/>
        <div className='description'>
          <h3 className='cardTitle'>Titre de la recette</h3>
          <p className='detail'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
      <div className='card'>
        <img src={recipeImage}/>
        <div className='description'>
          <h3 className='cardTitle'>Titre de la recette</h3>
          <p className='detail'>Ajoutez ces graines riches en oméga-3 dans votre yaourt régulièrement selon cette nutritionniste</p>
          <p className='text-muted'>Aujourd'hui</p>
        </div>
      </div>
    </div>
  )
}
