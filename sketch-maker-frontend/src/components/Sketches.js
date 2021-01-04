import React from 'react';
import { connect } from 'react-redux';
import SketchListItem from './SketchListItem.js';
import { Form, FormControl, Row, Container } from 'react-bootstrap'; 

class Sketches extends React.Component {

    state = {
        value: ""
    }

    render () {

        const sorted = this.props.sketches.sort((a, b) => b.id - a.id)

        let filtered = sorted.filter(sketch => {
            return sketch.title.toLowerCase().includes(this.state.value.toLowerCase())
        })

        return (
        <div>
            <br></br>
            <Form className="searchbar">
                <FormControl type="text" value={this.state.value} onChange={event => this.setState({ value: event.target.value})} placeholder="Filter sketches by title" className="mr-sm-2" />
            <br></br>
            </Form>
            <Container >
            <Row >
                {filtered.map(sketch => <SketchListItem sketch={sketch} />)}
            </Row>
            </Container>
        </div>
        )
    }
}

const mapStateToProps = ({sketches}) => {
    return ({sketches: sketches.all})
}


export default connect(mapStateToProps)(Sketches)

