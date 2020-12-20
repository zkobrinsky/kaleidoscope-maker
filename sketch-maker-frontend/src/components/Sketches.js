import React from 'react';
import { connect } from 'react-redux';
import { getSketches } from '../redux/actions/sketchActions'

class Sketches extends React.Component {
    

    componentDidMount() {
        this.props.getSketches()
    }
    render () {
        // debugger;
        return (
        <div>
            <h1>Kaleidescopes</h1>
            <ul className="kaleidescope_index">
                {this.props.sketches.map(sketch => {
                    return (
                        <li>
                            <img src={sketch.image_url} alt={sketch.title} className="photo"/>
                            <p>{sketch.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}


export default connect(mapStateToProps, { getSketches })(Sketches)

