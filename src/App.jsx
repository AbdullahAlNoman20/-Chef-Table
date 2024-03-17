
import { useState } from 'react'
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Header/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cook,setcook] = useState([]);

  const handleAddCook = (recipe) =>{
    // console.log(recipe)
    toast("Wow so easy !");
    
    const newCook =[...cook,recipe];
    setcook(newCook);



  }


  return (
    <>
    
    <Header></Header>

    <div className="flex md:flex-row flex-col justify-center gap-5 md:px-20 mb-20">
      <Recipes handleAddCook={handleAddCook}></Recipes>
      <Cook cook={cook}></Cook>

    </div>
    
    <ToastContainer />
    </>
  )
}

export default App
