import React from 'react';
import Sketch from './Sketch';
import { Button, Form } from 'react-bootstrap';
import Faker from 'fakergem';
import { connect } from 'react-redux';
import { createSketch, updateColor } from '../redux/actions/sketchActions';
import { SliderPicker } from 'react-color';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';



class  CreateSketch extends React.Component {

    state = {
        title: "",
        reflections: 4,
        currentColor: {h: parseInt(Math.random()*360+1), s: Math.random(), l: Math.random()},
        colors: [],
        bgColor: "",
        rainbow: false,
        placeHolder: "",
        lineWidth: 8
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            placeHolder: this.placeHolder(),
            bgColor: {h: parseInt(Math.random()*360+1), s: Math.random(), l: Math.random()}
        })
    }

    placeHolder = () => {
        let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
            Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
            Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
            Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]
        return wordChoices[parseInt(Math.random()*wordChoices.length)]
    }


    handleOnChange = (e) => {
        const key = e.target.name;

        this.setState({
            ...this.state,
            [key]: e.target.value
        })
    }

    handleColorChange = ({hsl}) => {
        this.setState({
            ...this.state,
            currentColor: hsl
        }, () => console.log(this.state.currentColor))
    }

    handleColorChangeComplete = (color) => {
        // this.props.updateColor(color)
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
        this.props.history.push("/sketches")
      }

    handleSubmit = (e) => {
        e.preventDefault();
        // conditional title to state (placeholder vs value)
        if (e.target.querySelector("#exampleForm\\.ControlInput1").value !== "") {
            this.setState({
                ...this.state,
                title: e.target.querySelector("#exampleForm\\.ControlInput1").value,
                reflections: parseInt(e.target.querySelector("#exampleForm\\.ControlSelect1").value)
            }, () => this.postData(this.state)) 

        } else {
            this.setState({
                ...this.state,
                title: e.target.querySelector("#exampleForm\\.ControlInput1").placeholder,
                reflections: parseInt(e.target.querySelector("#exampleForm\\.ControlSelect1").value)
            }, () => this.postData(this.state))
        }
    }

    handleRainbowButton = () => {
        this.setState({
            ...this.state,
            rainbow: !this.state.rainbow
        })
    }

    handleLineWidthChange = (value) => {
        debugger;
        // this.setState({
        //     ...this.state,
        //     lineWidth:
        // })
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
            
            <Sketch state={this.state} />
            <SliderPicker color={this.state.currentColor} onChangeComplete={ this.handleColorChangeComplete } onChange={this.handleColorChange}/>
            <br></br>
            <Slider 
                min={1}
                max={20}
                step={1}
                onChange={value => this.setState({...this.state, lineWidth: value})}
                value={this.state.lineWidth}/>
            <br></br>
            <button onClick={this.handleRainbowButton} className="rainbow-button">Rainbow</button><br></br>

            <Form className="newform" onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reflection Number</Form.Label>
                <Form.Control as="select" value={this.state.reflections} name="reflections" onChange={this.handleOnChange}>
                    {this.renderOptions(12)}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" value={this.state.title} placeholder={this.state.placeHolder} name="title" onChange={this.handleOnChange}/>
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


export default connect(mapStateToProps, { createSketch, updateColor })(CreateSketch)