import React from 'react';
import Sketch from './Sketch';
import P5Wrapper from 'react-p5-wrapper';
import WrapperPackageSketch from './WrapperPackageSketch'
import Button from 'react-bootstrap/Button';



const { Faker } = require('fakergem');

const CreateSketch = () => {
    let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
        Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]
    let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]




    return (
        <div>
            <Sketch angle={0} rotateRate={0.5} />
            {/* <P5Wrapper sketch={WrapperPackageSketch} rotation={1} /> */}
            <Button variant="primary">Bootstrap button</Button>{' '}
            <form>
                Title: <input type="text" value={placeHolder}/>

                {/* here is where we need to implement color picker / displayer */}
            </form>
        </div>
    )
}

export default CreateSketch