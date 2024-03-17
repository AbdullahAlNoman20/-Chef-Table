
import { useState } from 'react'
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Header/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer'

function App() {

  const [cook,setcook] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleAddCook = (recipe,recipeId) =>{
    console.log(recipe,recipeId)
    
    if (selectedRecipes.includes(recipeId)) {
     
      toast.warn("Already Selected");
    } 
    else {
      
         const newCook = [...cook,recipe];
          setcook(newCook);
          toast.success("Your Food is going to Cook");
          setSelectedRecipes([...selectedRecipes, recipeId]);
          
        }


  }


  return (
    <>
    
    <Header></Header>

    <div className="flex md:flex-row flex-col justify-center gap-5 md:px-20 mb-20">
      <Recipes handleAddCook={handleAddCook}z></Recipes>
      <Cook cook={cook}></Cook>

    </div>

    <Footer></Footer>
    
    <ToastContainer />
    </>
  )
}

export default App
