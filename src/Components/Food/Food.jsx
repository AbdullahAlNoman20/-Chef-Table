import PropTypes from 'prop-types';


const Food = ({food,handleAddCooking}) => {


    const {recipe_name,calories,preparing_time} = food;
    
    return (
        <div className='mt-5 bg-gray-100 p-3 rounded-xl'>
            <div className="flex items-center gap-2">

                <p className='text-sm'>1</p>
                <p className='text-sm'>{recipe_name}</p>
                <p className='text-sm'><span className='mx-2'>{preparing_time}minutes</span><span>{calories}calories</span></p>
                <button onClick={()=> handleAddCooking(food)} className='btn btn-outline btn-info btn-sm text-sm'>Preparing</button>


            </div>

        </div>

        
    );
};


Food.propTypes= {
    food: PropTypes.object,
    handleAddCooking:PropTypes.func
}

export default Food;