import React from 'react'
import './recipe.css'
function Recipe({recipe}){
  return (
     
        <div className="recipeTile">
          <img
            className="recipeTile__image"
            src={recipe["recipe"]["image"]}
            alt="tile-image"
            onClick={() => window.open(recipe["recipe"]["url"])}
          />
          <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
  )
  
}

export default Recipe