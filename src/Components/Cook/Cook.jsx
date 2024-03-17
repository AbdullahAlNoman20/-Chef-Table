
import PropTypes from 'prop-types';
import Food from '../Food/Food';
import Cooking from '../Cooking/Cooking';
import { useState } from 'react';



const Cook = ({cook}) => {


    const [cooking,setcooking] = useState([]);

    const handleAddCooking = (food) =>{
        // console.log(food)
        const newCooking =[...cooking,food];
        setcooking(newCooking);

        
      }


    
    return (
        <div className="md:w-1/3 border-2 p-5 rounded-3xl border-green-100">
            <div className=" text-center">
            <h1 className="text-2xl font-bold mb-5">Want to cook : {cook.length}</h1>
            <hr />
            <div className=" flex justify-around mt-5 w-2/3">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            </div>

                {
                    cook.map(food => <Food 
                        key={cook.id} 
                        food={food}
                        handleAddCooking={handleAddCooking}
                    
                    ></Food>)
                }
                
            <Cooking cooking={cooking}></Cooking>

            <div className=" text-right mt-20">
                <hr />
                <p>Total Time : {cook.length} </p>
                <p>Total Calories : {cook.length} </p>
            </div>

        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.array,
    
}

export default Cook;