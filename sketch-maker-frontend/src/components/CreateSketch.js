import React from 'react';
import Sketch from './Sketch';
import P5Wrapper from 'react-p5-wrapper';
import WrapperPackageSketch from './WrapperPackageSketch'
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
        title: placeHolder
    }

    handleOnChange = (props) => {

    }

    render () { 
        
        return (
        
        <div className="justify-content-center">
            
            <Sketch angle={0} rotateRate={0.5} />
            {/* <P5Wrapper sketch={WrapperPackageSketch} rotation={1}>
                <p><Button variant="primary">Bootstrap button</Button>{' '}</p>
            </P5Wrapper> */}

<Form className="newform">

      <Form.Label>Title:</Form.Label>
      <Form.Control type="text" placeholder={this.state.title} onChange={this.handleOnChange}/>
      <Button as="input" type="submit" value="Save Your Creation" />{''}
  </Form>

        </div>
    )
        }
}

export default CreateSketch