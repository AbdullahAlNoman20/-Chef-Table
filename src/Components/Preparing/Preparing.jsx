
import PropTypes from 'prop-types';



const Preparing = ({preparing}) => {

    const{recipe_name,preparing_time,calories}=preparing;

    return (
        <div className='mt-5 bg-gray-100 p-3 rounded-xl'>
            <div className=" flex items-center gap-5 justify-around">
                <p className='text-sm'>1</p>
                <p className='text-sm'>{recipe_name}</p>
                <p className='text-sm'><span className='mr-16'>{preparing_time}minutes</span><span>{calories}calories</span></p>
            </div>
            
        </div>
    );
};

Preparing.propTypes= {
    preparing: PropTypes.object
}
export default Preparing;