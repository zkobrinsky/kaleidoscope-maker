const sketchReducer = (state = { 
    all: [] }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        case "CREATE_SKETCH_SUCCESS":
            return {...state, all: [...state.all, action.payload] };
        default:
            return state
    }
}

export default sketchReducer