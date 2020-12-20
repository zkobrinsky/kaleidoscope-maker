import React from 'react';
import { connect } from 'react-redux';
import { getSketches } from '../redux/actions/sketchActions'

class Sketches extends React.Component {

    componentDidMount() {
        this.props.getSketches()
    }
    render () {
        return (
        <div>
            <h1>hello from sketches</h1>
        </div>
        )
    }
}



export default connect(null, { getSketches })(Sketches)

