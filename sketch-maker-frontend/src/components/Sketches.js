import React from 'react';
import { connect } from 'react-redux';
import { getSketches } from '../redux/actions/sketchActions';
import SketchListItem from './SketchListItem.js'

class Sketches extends React.Component {
    

    componentDidMount() {
        this.props.getSketches()
    }
    render () {
        return (
        <div>
            <h1>Kaleidescopes</h1>
            <ul className="kaleidescope_index">
                {this.props.sketches.map(sketch => <SketchListItem sketch={sketch} />)}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}


export default connect(mapStateToProps, { getSketches })(Sketches)

