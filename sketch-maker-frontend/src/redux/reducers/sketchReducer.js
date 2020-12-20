const sketchReducer = (state = { all: [] }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        default:
            return state
    }
}

export default sketchReducer