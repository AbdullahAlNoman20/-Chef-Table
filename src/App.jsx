
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Header/Recipes/Recipes'

function App() {


  return (
    <>
    
    <Header></Header>

    <div className="md:flex justify-center gap-5 md:px-20 mb-20">
      <Recipes></Recipes>
      <Cook></Cook>
    </div>
    
      
    </>
  )
}

export default App
