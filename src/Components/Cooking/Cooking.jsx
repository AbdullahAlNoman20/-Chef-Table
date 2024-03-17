import PropTypes from 'prop-types';
import Preparing from '../Preparing/Preparing';

const Cooking = ({cooking}) => {
    return (
        <div>
            <div className=" text-center">
            <h1 className="text-2xl font-bold my-5">Currently cooking : {cooking.length}</h1>
            <hr />
            <div className=" flex justify-between mt-5 mb-5">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            </div>


            {
                cooking.map((preparing, idx) => <Preparing key={idx} preparing={preparing}></Preparing>)
            }
        </div>
    );
};

Cooking.propTypes= {
    cooking: PropTypes.array
}

export default Cooking;