import React from "react";
import Sketch from "react-p5";

// will just start creating w/o mouse click + no navbar... mouseClick to create page

export default (props) => {

  let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]
  let angle = props.angle;
  console.log(placeHolder)

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.9).parent(canvasParentRef);
    // need to figure out how to map canvas size to div
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
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight * 0.9);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} mouseClicked={mouseClicked} />;
};