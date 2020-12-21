import React from 'react';
import Sketch from './Sketch';
import { Button, Form } from 'react-bootstrap';
import Faker from 'fakergem';

let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]
    let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]

class  CreateSketch extends React.Component {

    state = {
        title: "",
        reflections: Math.floor(Math.random() * Math.floor(10))+1
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            title: e.target.value
        }, () => {
            console.log(this.state.title)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        debugger;

        // save reflections to state
        this.setState({
            ...this.state,
            reflections: e.target.querySelector("#exampleForm\\.ControlSelect1").value
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
    }

    render () { 
        
        return (
        
        <div className="justify-content-center">
            
            <Sketch angle={0} symmetry={this.state.reflections} rotateRate={0.5} />
            {/* <P5Wrapper sketch={WrapperPackageSketch} rotation={1}>
                <p><Button variant="primary">Bootstrap button</Button>{' '}</p>
            </P5Wrapper> */}

            <Form className="newform" onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" value={this.state.title} placeholder={placeHolder} onChange={this.handleOnChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reflection Number</Form.Label>
                <Form.Control as="select">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4' selected>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                </Form.Control>
            </Form.Group>
                <Button as="input" type="submit" value="Save Your Creation" />{''}
            </Form>

        </div>
    )
        }
}

export default CreateSketch