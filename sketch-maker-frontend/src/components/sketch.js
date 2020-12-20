import React from "react";
import Sketch from "react-p5";

const { Faker } = require('fakergem');

let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]



export default (props) => {

  let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]
  let angle = props.angle;
  console.log(placeHolder)

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowHeight * 0.8, p5.windowHeight * 0.8).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
  };
  
  const draw = (p5) => {
    p5.background(200, 60, 60);
    p5.translate(p5.width * 0.5, p5.height * 0.5);
    p5.rotate(angle);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(30);
    p5.text("Hello from p5.js", 0, 0);
    angle += props.rotateRate;
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowHeight * 0.8, p5.windowHeight * 0.8);
  };

  const mouseClicked = (p5) => {
    postImage()
  }

  const postImage = () => {
    let canvas = document.querySelector("#defaultCanvas0");
    canvas.toBlob((b) => {
      var formData = new FormData();
      formData.append("image", b);
      fetch("http://localhost:3001/sketches", {
        method: "POST",
        body: formData,
      })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
    })
  }
  
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} mouseClicked={mouseClicked} />;
};