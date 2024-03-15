import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {

    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;

    // console.log(recipe)

    return (
        <div className='border-2 border-green-100 p-4 rounded-3xl'>
            <img className='w-96 h-80 rounded-3xl' src={recipe_image} alt="" />
            <h1 className='text-3xl my-5'>{recipe_name}</h1>
            <p>{short_description}</p>
            <hr className='my-5' />
            <p><i class="fa-regular fa-clock"></i> <span> {preparing_time} </span> minutes <i class="fa-solid fa-fire-flame-curved ml-5"></i> <span> {calories} </span> calories</p>

            <button class="btn btn-outline btn-success rounded-2xl mt-5 text-white">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired
}

export default Recipe;