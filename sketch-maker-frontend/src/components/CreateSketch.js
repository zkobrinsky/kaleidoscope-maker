import React from 'react';
import Sketch from './Sketch';
// import P5Wrapper from 'react-p5-wrapper';
// import WrapperPackageSketch from './WrapperPackageSketch'
import { Button, Form } from 'react-bootstrap';
import Faker from 'fakergem';



// const { Faker } = require('fakergem');

let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]
    let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]

class  CreateSketch extends React.Component {

    state = {
        title: placeHolder,
        reflections: Math.floor(Math.random() * Math.floor(10))+1
    }

    handleOnChange = (props) => {

    }

    render () { 
        
        return (
        
        <div className="justify-content-center">
            
            <Sketch angle={0} symmetry={this.state.reflections} rotateRate={0.5} />
            {/* <P5Wrapper sketch={WrapperPackageSketch} rotation={1}>
                <p><Button variant="primary">Bootstrap button</Button>{' '}</p>
            </P5Wrapper> */}

<Form className="newform">
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title: </Form.Label>
    <Form.Control type="text" value={this.state.title} />
  </Form.Group>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Reflection Number</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </Form.Control>
  </Form.Group>

      <Button as="input" type="submit" value="Save Your Creation" />{''}
  </Form>

        </div>
    )
        }
}

export default CreateSketch