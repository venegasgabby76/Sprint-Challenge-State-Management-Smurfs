import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getSmurf } from "../actions/actions"
import Smurfs from "./smurfs"


const SmurfList = props => {

    useEffect(() => {
        props.getSmurf();
    }, []);
    console.log(props.smurfs)


    return (
        <div className="your-smurfs">
            {props.smurfs.map(smurf =>
                <Smurfs
                    id={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />)}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, { getSmurf })(SmurfList);