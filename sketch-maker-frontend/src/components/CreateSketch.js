import React from 'react';
import Sketch from './Sketch';
import { Button, Form } from 'react-bootstrap';
import Faker from 'fakergem';
import { connect } from 'react-redux';
import { createSketch,
    updateColor,
    updateReflections,
    refreshStartColor,
    refreshStartBgColor,
    updateLineWidth,
    addSketchColor,
    resetSketch
 } from '../redux/actions/sketchActions';

import { SliderPicker, GithubPicker } from 'react-color';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'; 



class  CreateSketch extends React.Component {

    state = {
        title: "",
        rainbow: false,
        placeHolder: "",
        variableLineWidth: false
    }

    componentDidMount() {
        // Might still use to create sketch from existing palette:
        // this.props.refreshStartColor()
        // this.props.refreshStartBgColor()
        
        this.props.resetSketch()

        this.setState({
            ...this.state,
            placeHolder: this.placeHolder(),
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
    
    handleReflectionChange = (e) => {
        this.props.updateReflections(+e.target.value)
    }

    handleColorChange = ({hsl}) => {
        this.props.updateColor(hsl)
    }

    handleColorChangeComplete = (color) => {
        this.props.addSketchColor(color)
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

    handleClearCanvas = () => {
        this.setState({
            ...this.state, 
            clearCanvas: !this.state.clearCanvas
        })
    }

    handleVariableLW = () => {
        this.setState({
            ...this.state, 
            variableLineWidth: !this.state.variableLineWidth
        }, () => console.log(this.state.variableLineWidth))

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
            <SliderPicker color={this.props.sketch.currentColor} onChangeComplete={ this.handleColorChangeComplete } onChange={this.handleColorChange}/>
            <br></br>
            <Form.Label className={"lineWidth"}>Line Width</Form.Label>
                <Slider className="linewidth"
                label={"Line Width"}
                min={1}
                max={25}
                step={1}
                onChange={value => this.props.updateLineWidth(value)}
                value={this.props.sketch.lineWidth}/>
            
            <br></br>
            {this.props.sketch.colors.length > 0 ? <GithubPicker 
                onChangeComplete={this.handleColorChange}
                width={window.innerWidth * 0.25} 
                triangle={"hide"} 
                colors={this.props.sketch.colors.map(color => color.hex)}
            /> : null }
            <br></br>
            <button onClick={this.handleRainbowButton} className="rainbow-button">Rainbow</button>
            <br></br><br></br>
            <Button onClick={this.handleVariableLW} >Variable Width</Button>
            <br></br>
            <br></br>

            <Form className="newform" onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reflection Number</Form.Label>
                <Form.Control as="select" value={this.props.sketch.reflections} name="reflections" onChange={this.handleReflectionChange}>
                    {this.renderOptions(12)}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" value={this.state.title} placeholder={this.state.placeHolder} name="title" onChange={this.handleOnChange}/>
            </Form.Group>
                <Button href="#" onFocus={this.handleClearCanvas} onClick={this.handleClearCanvas} >Clear Canvas</Button>{''}
                <br></br><br></br>
                <Button as="input" type="submit" value="Save Your Creation" />{''}
            </Form>
            

        </div>
    )
        }
}

const mapStateToProps = ({sketches}) => {
    return ({sketch: sketches.sketch})
}


export default connect(mapStateToProps, { 
    createSketch,
    updateColor,
    updateReflections,
    refreshStartColor,
    refreshStartBgColor,
    updateLineWidth,
    addSketchColor,
    resetSketch
 })(CreateSketch)