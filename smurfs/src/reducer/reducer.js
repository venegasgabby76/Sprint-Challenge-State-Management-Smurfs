const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            return {
                ...state,
                isFetching: true
            };
        case "FETCHING_SMURFS_SUCCESS":
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                errors: ""
            };
        case "FETCHING_SMURFS_FAILED":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case "ADDING_SMURF_SUCCESS":
            return {
                ...state,
                 smurfs: [...state.smurfs , {
                     name:action.payload.name,
                     age: action.payload.age,
                     height: action.payload.height
                 }]
            };
            case "ADDING_SMURF_FAILED":
                return {
                    ...state, 
                    isFetching: false,
                    error: action.payload
                }
        default:
            return state;
    }
}