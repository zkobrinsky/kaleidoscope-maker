const sketchReducer = (state = { 
    all: [], 
    sketch = {
        bg_color: "",
        colors: [],
        title: "",
        image_url: ""
} }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        case "SAVE_SKETCH":
            return {...state, sketch: action.payload};
        default:
            return state
    }
}

export default sketchReducer