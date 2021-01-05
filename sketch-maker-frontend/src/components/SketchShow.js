import React from 'react';
import { connect } from 'react-redux';
import { getSketch } from '../redux/actions/sketchActions';
 
class SketchShow extends React.Component {

    constructor(props) {
        super(props);
        this.sketch = this.props.sketch;
    }


    componentDidMount() {
        if (this.sketch === undefined) {
            this.props.getSketch(this.props.match.params.id)
            .then(foundSketch => {
                this.sketch = foundSketch
            })
        }
    }
    
    render() {
        if (this.sketch !== undefined) {
            return (
                <div>
                    <h1>{this.sketch.title}</h1>
                    <img src={this.sketch.image_full} alt={this.sketch.title} className="photo-medium" />
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