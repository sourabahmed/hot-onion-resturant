import React, { useEffect, useState } from 'react';
import Break from './Break';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState();
    console.log(breakfasts);
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfasts(data))
    },[])
    return (
        <div className="row container">
            {
                breakfasts?.map(breakfast => <Break
                breakfast={breakfast}
                ></Break>)           
            }
        </div>
    );
};

export default Breakfast;