const sketchReducer = (state = { sketches: [] }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, sketches: action.payload};
        default:
            return state
    }
}

export default sketchReducer