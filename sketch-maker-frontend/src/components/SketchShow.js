import React from 'react';
import { connect } from 'react-redux'

const SketchShow = (props) => {
    const sketch = props.sketches.find(sketch => sketch.id == +props.match.params.id)
    console.log(sketch)
    // debugger;
    return (
        <div>
            <h1>{sketch.title}</h1>
            <img src={sketch.image_url} alt={sketch.title} />
        </div>
    )

}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}

export default connect(mapStateToProps)(SketchShow)







