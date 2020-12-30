const sketchReducer = (state = { 
    all: [],
    sketch: {
        colors: [],
        currentColor: {h: Math.random()*360+1, s: Math.random(), l: Math.random()},
        reflections: 4,
        bgColor: {h: Math.random()*360+1, s: Math.random(), l: Math.random()},
        lineWidth: 8
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

        case "REFRESH_START_COLOR":
            return {...state,
                sketch: {
                    ...state.sketch,
                    currentColor: {h: Math.random()*360+1, s: Math.random(), l: Math.random()}
                }
            }

        case "REFRESH_START_BG_COLOR":
            return {...state,
                sketch: {
                    ...state.sketch,
                    bgColor: {h: Math.random()*360+1, s: Math.random(), l: Math.random()}
                }
            }

        case "UPDATE_LINE_WIDTH":
            return {...state,
                sketch: {
                    ...state.sketch,
                    lineWidth: action.payload
                }
            }

        case "ADD_SKETCH_COLOR":
            return {...state,
                sketch: {
                    ...state.sketch,
                    colors: state.sketch.colors.concat(action.payload)
                }
            }

        default:
            return state
    }
}

export default sketchReducer