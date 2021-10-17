import React from 'react';

const Breakfast = (props) => {
    const {img, name, description, price } = props.breakfast;
    return (
        <div className="col-4 p-4">
            <img className="img-fluid" src={img} alt="" />
            <h4>{name}</h4>
            <p><small>{description}</small></p>
            <h5>$:{price}</h5>
        </div>
    );
};

export default Breakfast;