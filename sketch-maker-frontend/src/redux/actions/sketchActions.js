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

export const createSketches = (payload) => {
    return dispatch => {
        fetch('http://localhost:3001/sketches', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json())
        .then(sketch => dispatch({type: "FETCH_SKETCHES_SUCCESS", payload: sketch}))
    } 
}