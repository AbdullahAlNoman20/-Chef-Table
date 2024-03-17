
import { useState } from 'react'
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Header/Recipes/Recipes'

function App() {

  const [cook,setcook] = useState([]);

  const handleAddCook = (recipe) =>{
    // console.log(recipe)
    const newCook =[...cook,recipe];
    setcook(newCook);

        //     // And Remove From Cook
        // console.log('Remove ID ',recipe_id)
        // const remainingcook = cook.filter(cook =>cook.recipe_id !== recipe_id);
        // setcook(remainingcook)

    
  }


  return (
    <>
    
    <Header></Header>

    <div className="flex md:flex-row flex-col justify-center gap-5 md:px-20 mb-20">
      <Recipes handleAddCook={handleAddCook}></Recipes>
      <Cook cook={cook}></Cook>

    </div>
    
      
    </>
  )
}

export default App
