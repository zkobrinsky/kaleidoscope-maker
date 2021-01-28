import React from 'react';
import { connect } from 'react-redux';
import { getSketch } from '../redux/actions/sketchActions';
 
class SketchShow extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        sketch: this.props.sketch
    }


    componentDidMount() {
        if (this.state.sketch === undefined) {
            this.props.getSketch(this.props.match.params.id)
            .then(foundSketch => {
                if (foundSketch) {
                this.setState({
                    sketch: foundSketch
                })
            }
            })
        }
    }
    
    render() {
        if (this.state.sketch) {
            return (
                <div className="image-large">
                    <h1>{this.state.sketch.title}</h1>
                    <img src={this.state.sketch.image_full} alt={this.state.sketch.title} className="photo-medium" />
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Sketch not found</h1>
                </div>
            )
        }
    }
 
}
 
const mapStateToProps = ({sketches}, props) => {
    return ({sketch: sketches.all.find(sketch => sketch.id == props.match.params.id)})
}
 
export default connect(mapStateToProps, { getSketch })(SketchShow)