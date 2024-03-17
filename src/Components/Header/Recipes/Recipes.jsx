import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleAddCook}) => {

    // Data Lode Kore jekhane rakhbo sai state
    const [recipes, setRecipes] = useState([])

    // For Data Lode
    useEffect(()=> {
        fetch('recipes.json')
        .then(res => res.json())
        .then(recipe => setRecipes(recipe))
    } ,[])

    return (
        <div className="md:w-2/3 mx-5 grid md:grid-cols-2 gap-5">

            {
                recipes.map( (recipe,idx) => <Recipe 
                    
                    key={idx} 
                    recipe={recipe}
                    handleAddCook = {handleAddCook}

                    ></Recipe>)
            }

        </div>
    );
};


Recipes.propTypes = {
    handleAddCook: PropTypes.func
}


export default Recipes;