import React from 'react';


const Smurfs = props => {
    return (
        <div className="smurfs" id={props.id}>
            <h1>Name:{props.name}</h1>
            <p>Age:{props.age}</p>
            <p>Height{props.height}</p>
        </div>
    )
}



export default Smurfs;

