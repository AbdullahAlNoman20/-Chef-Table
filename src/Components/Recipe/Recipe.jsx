import PropTypes from 'prop-types';

const Recipe = ({recipe,handleAddCook}) => {

    const {recipe_image,recipe_name,short_description,preparing_time,calories} = recipe;
    const recipeId = recipe.recipe_id;

    // console.log(recipe)

    return (
        <div className='border-2 border-green-100 p-4 rounded-3xl'>
            <img className='w-96 h-80 rounded-3xl' src={recipe_image} alt="" />
            <h1 className='text-3xl my-5'>{recipe_name}</h1>
            <p>{short_description}</p>
            <hr className='my-5' />
            <p><i className="fa-regular fa-clock"></i> <span> {preparing_time} </span> minutes <i class="fa-solid fa-fire-flame-curved ml-5"></i> <span> {calories} </span> calories</p>

            <button onClick={() => handleAddCook(recipe,recipeId)} className="btn btn-outline btn-success rounded-2xl mt-5 text-white">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleAddCook: PropTypes.func
}

export default Recipe;