import React from 'react';


const Smurfs = props => {
    return (
        <div className="smurfs" id={props.id}>
            <h3>Name:{props.name}</h3>
            <p>Age:{props.age}</p>
            <p>Height{props.height}</p>
        </div>
    )
}



export default Smurfs;

