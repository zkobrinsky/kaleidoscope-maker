import React from 'react';
import { connect } from 'react-redux'

const SketchShow = (props) => {
    // debugger;
    console.log(props.sketches)

    return (
        <div>
            <h1>hello from sketchshow</h1>
        </div>
    )

}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}

export default connect(mapStateToProps)(SketchShow)







