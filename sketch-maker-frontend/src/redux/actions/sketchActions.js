export const getSketches = () => {
   return dispatch => {
       fetch('http://localhost:3001/sketches', {
           method: 'GET',
           headers: {
            'Content-Type': 'application/json'
           }
       })
       .then(resp => resp.json())
       .then(sketches => dispatch({type: "FETCH_SKETCHES_SUCCESS", payload: sketches}))
   } 
}

export const createSketch = (formData) => {
    return dispatch => {
        fetch('http://localhost:3001/sketches', {
            method: 'POST', 
            body: formData
        })
        .then(resp => resp.json())
        .then(sketch => dispatch({type: "CREATE_SKETCH_SUCCESS", payload: sketch}))
    } 
}

export const updateReflections = (reflections) => {
    debugger;
    return {type: "UPDATE_REFLECTIONS", payload: reflections}
}

export const updateColor = (color) => {
    return {type: "UPDATE_SKETCH_COLOR", payload: color}
}