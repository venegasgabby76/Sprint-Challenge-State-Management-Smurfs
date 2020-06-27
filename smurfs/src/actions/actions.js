import axios from "axios";


export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILED = "FETCHING_SMURFS_FAILED";
export const ADDING_SMURFS_SUCCESS = "ADDING_SMURFS_SUCCESS";
export const ADDING_SMURFS_FAILED = "ADDING_SMURFS_FAILED";

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCHING_SMURFS_FAILED });
        });
};

export const addingSmurf = addSmurf => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", addSmurf)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADDING_SMURFS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: ADDING_SMURFS_FAILED, payload: error.data })
        });
};