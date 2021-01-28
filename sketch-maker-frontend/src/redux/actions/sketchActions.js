export const getSketches = () => {
   return dispatch => {
       fetch('https://mandala-maker.herokuapp.com/sketches', {
           method: 'GET',
           headers: {
            'Content-Type': 'application/json'
           }
       })
       .then(resp => resp.json())
       .then(sketches => dispatch({type: "FETCH_SKETCHES_SUCCESS", payload: sketches}))
   } 
}

export const getSketch = (id) => {
    return dispatch => {
        return fetch(`https://mandala-maker.herokuapp.com/sketches/${id}`, {
            method: 'GET',
            headers: {
             'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        // .then(sketch => dispatch({type: "FETCH_SKETCH_SUCCESS", payload: sketch}))
    } 
 }

export const createSketch = (formData) => {
    return dispatch => {
        return fetch('https://mandala-maker.herokuapp.com/sketches', {
            method: 'POST', 
            body: formData
        })
        .then(resp => resp.json())
        .then(sketch => {
            return dispatch({type: "CREATE_SKETCH_SUCCESS", payload: sketch})
        }) 
    } 
}

export const updateReflections = (reflections) => {
    return {type: "UPDATE_REFLECTIONS", payload: reflections}
}

export const updateColor = (color) => {
    return {type: "UPDATE_SKETCH_COLOR", payload: color}
}

export const refreshStartColor = () => {
    return {type: "REFRESH_START_COLOR"}
}

export const refreshStartBgColor = () => {
    return {type: "REFRESH_START_BG_COLOR"}
}

export const updateLineWidth = (lineWidth) => {
    return {type: "UPDATE_LINE_WIDTH", payload: lineWidth}
}

export const addSketchColor = (color) => {
    return {type: "ADD_SKETCH_COLOR", payload: color}
}

export const resetSketch = () => {
    return {type: "RESET_SKETCH"}
}

