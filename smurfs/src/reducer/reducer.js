import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILED,
    ADDING_SMURFS_SUCCESS,
    ADDING_SMURFS_FAILED,
} from "../actions/actions"


const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                errors: ""
            };
        case FETCHING_SMURFS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADDING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height
                }]
            };
        case ADDING_SMURFS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}