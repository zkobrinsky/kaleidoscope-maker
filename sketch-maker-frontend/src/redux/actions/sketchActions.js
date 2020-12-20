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