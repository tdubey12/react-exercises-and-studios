import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description.jsx'
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/Photos'

function App() {

  return (
    <>
   <div className="App">
   <div>
      <RecipeDescription />
      <RecipeIngredients />
      <div className="recipePhotoBlock">
      <RecipePhoto />
      </div>
   </div>
</div>
    </>
  )
}

export default App