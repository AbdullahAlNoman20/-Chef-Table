import PropTypes from 'prop-types';

const Recipe = ({recipe,handleAddCook}) => {

    const {recipe_image,recipe_name,short_description,preparing_time,calories,ingredients} = recipe;
    const recipeId = recipe.recipe_id;

    // console.log(recipe)

    return (
        <div className='border-2 border-green-100 p-4 rounded-3xl'>
            <img className='w-96 h-80 rounded-3xl' src={recipe_image} alt="" />
            <h1 className='text-3xl my-5 text-green-500'>{recipe_name}</h1>
            <p className='text-gray-500'>{short_description}</p>
            <hr className='my-5' />
            <h1 className='py-3 font-bold text-red-500'>Ingredients {ingredients.length}</h1>
                <ul>
                    {
                        ingredients.map((ingredients,idx)=> <li key={idx}> <i class="fa-solid fa-check text-sky-500"> </i>  {ingredients}</li>)
                    }
                </ul>
            <br />
            <hr />
            <br />
            <p><i className="fa-regular fa-clock text-sky-500"></i> <span> {preparing_time} </span> minutes <i class="fa-solid fa-fire-flame-curved ml-5 text-red-500"></i> <span> {calories} </span> calories</p>

            <button onClick={() => handleAddCook(recipe,recipeId)} className="btn btn-outline btn-success rounded-2xl mt-5 text-white">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleAddCook: PropTypes.func
}

export default Recipe;