const sketchReducer = (state = { 
    all: [], 
    sketch: {
        bg_color: "",
        colors: [],
        title: "",
        image_url: "",
        reflections: 4
} }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        case "CREATE_SKETCH_SUCCESS":
            return {...state, sketch: action.payload};
        default:
            return state
    }
}

export default sketchReducer