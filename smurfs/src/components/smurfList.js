import React from "react";
import Smurfs from "./smurfs"

const SmurfList = props => {
    return (
    <div className="your-smurfs">
        {props.smurfs.map(smurf => 
          <Smurfs 
          id = {smurf.id}
          name = {smurf.name}
          age = {smurf.age}
          height = {smurf.height}
          />  )} 
    </div>
    )
}

export default SmurfList;