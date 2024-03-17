
import { useState } from 'react'
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Header/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cook,setcook] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleAddCook = (recipe) =>{
    // console.log(recipe)
    
    if (isSelected) {
      toast("Already Selected");
    } 
    else {
         const newCook = [...cook,recipe];
          setcook(newCook);
          toast("Recipe Added"); 
          setIsSelected(true);
        }


  }


  return (
    <>
    
    <Header></Header>

    <div className="flex md:flex-row flex-col justify-center gap-5 md:px-20 mb-20">
      <Recipes handleAddCook={handleAddCook}z></Recipes>
      <Cook cook={cook}></Cook>

    </div>
    
    <ToastContainer />
    </>
  )
}

export default App
