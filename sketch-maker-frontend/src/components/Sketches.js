import React from 'react';
import { connect } from 'react-redux';
import SketchListItem from './SketchListItem.js'

class Sketches extends React.Component {

    render () {

        const sorted = this.props.sketches.sort((a, b) => b.id - a.id)

        return (
        <div>
            <h1>Kaleidescopes</h1>
            <ul className="kaleidescope_index">
                {sorted.map(sketch => <SketchListItem sketch={sketch} />)}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}


export default connect(mapStateToProps)(Sketches)

