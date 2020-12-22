import React from 'react';
import Sketch from './Sketch';
import { Button, Form } from 'react-bootstrap';
import Faker from 'fakergem';
import { connect } from 'react-redux';
import { createSketch } from '../redux/actions/sketchActions';
import { SliderPicker } from 'react-color';

let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]
    let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]

class  CreateSketch extends React.Component {

    state = {
        title: placeHolder,
        reflections: 4,
        currentColor: {h: parseInt(Math.random()*360+1), s: Math.random(), l: Math.random()},
        rainbow: false
    }

    handleOnChange = (e) => {
        const key = e.target.name;

        this.setState({
            ...this.state,
            [key]: e.target.value
        })
    }

    handleColorChange = (color) => {
        this.setState({
            ...this.state,
            currentColor: color.hsl
        })
    }

    handleColorChangeComplete = (color) => {
        // console.log(color.hsl)
    }


    postData = (formData) => {
        let canvas = document.querySelector("#defaultCanvas0");
        canvas.toBlob((b) => {
          let form = new FormData();
          form.append("image", b);
          Object.keys(formData).forEach(key => {
              form.append(key, formData[key])
          })
          this.props.createSketch(form)
        })
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.postData(this.state)


        // save reflections to state
        this.setState({
            ...this.state,
            reflections: parseInt(e.target.querySelector("#exampleForm\\.ControlSelect1").value)
        })

        // conditional title to state (placeholder vs value)
        if (e.target.querySelector("#exampleForm\\.ControlInput1").value !== "") {
            this.setState({
                ...this.state,
                title: e.target.querySelector("#exampleForm\\.ControlInput1").value
            }) 

        } else {
            this.setState({
                ...this.state,
                title: e.target.querySelector("#exampleForm\\.ControlInput1").placeholder
            })
        }
        // redirect to gallery
        this.props.history.push("/sketches")
    }

    renderOptions = (num) => {
        const N = num;
        const arr = Array.from({length: N}, (_, index) => index + 1)

        return arr.map((val, i) => {
            return <option value={val} key={i}>{val}</option>
        })
    }

    render () { 
        return (

        <div className="justify-content-center">
            
            <Sketch angle={0} symmetry={this.state.reflections} rotateRate={0.5} color={this.state.currentColor}/>
            {/* <P5Wrapper sketch={WrapperPackageSketch} rotation={1}>
                <p><Button variant="primary">Bootstrap button</Button>{' '}</p>
            </P5Wrapper> */}
            <SliderPicker color={this.state.currentColor} onChangeComplete={ this.handleColorChangeComplete } onChange={this.handleColorChange}/>
            <Form className="newform" onSubmit={this.handleSubmit}>
            
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" value={this.state.title} placeholder={placeHolder} name="title" onChange={this.handleOnChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reflection Number</Form.Label>
                <Form.Control as="select" value={this.state.reflections} name="reflections" onChange={this.handleOnChange}>
                    {this.renderOptions(12)}
                </Form.Control>
            </Form.Group>
                <Button as="input" type="submit" value="Save Your Creation" />{''}
            </Form>
            

        </div>
    )
        }
}

const mapStateToProps = ({sketches}) => {
    return ({sketch: sketches.sketch})
}


export default connect(mapStateToProps, { createSketch })(CreateSketch)