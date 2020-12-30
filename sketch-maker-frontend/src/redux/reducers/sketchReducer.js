const sketchReducer = (state = { 
    all: [],
    sketch: {
        colors: [],
        currentColor: "",
        reflections: 4,
        bgColor: [Math.random()*360+1, Math.random(), Math.random()],
    }
 }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        case "CREATE_SKETCH_SUCCESS":
            return {...state, all: [...state.all, action.payload] };
        case "UPDATE_REFLECTIONS":
            return {...state,
                    sketch: {
                        ...state.sketch,
                        reflections: action.payload
                    }
                }
        case "UPDATE_SKETCH_COLOR":
            return {...state,
                sketch: {
                    ...state.sketch,
                    currentColor: action.payload
                }
            }

        default:
            return state
    }
}

export default sketchReducer