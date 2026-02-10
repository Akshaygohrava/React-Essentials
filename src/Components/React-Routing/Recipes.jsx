import React from 'react'
import Routes from './Routes'
import { useState, useEffect } from 'react'

export default function Recipes() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {}, []);

  const fetchRecipes = () => {
          try {
            fetch("https://dummyjson.com/recipes")


          } catch (error) {
            console.log(error)
          }
  }
  return (
    <div>
        <h2>This is Recipes Components</h2>
        <Routes></Routes>
        <h1>Fetch Api Using Use Effect,  await ! !</h1>

          <div class="row row-cols-1 row-cols-md-2 g-4">
                <p>{recipe && recipe.map(data => {
                <div className="col">
                <div className="card">
                 <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   </div>
                   </div>
                   </div>
           } )}</p>
          </div>
           
    </div>
  )
}
