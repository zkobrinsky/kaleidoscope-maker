import React from "react";
import Sketch from "react-p5";



export default (props) => {

  let symmetry = props.symmetry;
  let angle = 360 / symmetry;
  let xoff = 0;
  let bg;

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    bg = [p5.random(0,360), p5.random(50,100), p5.random(0,60)]
    p5.createCanvas(p5.windowWidth*0.995, p5.windowHeight * 0.9).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSL, 360, 100, 100, 100);
    p5.background(...bg);

    //declare p5 dependent functions here:
    p5.withinCanvas = () => {
      return (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) ? true : false
    }
  };
  
  const draw = (p5) => {
    p5.translate(p5.width * 0.5, p5.height * 0.5);

    if ( p5.mouseIsPressed && p5.withinCanvas() ) {
      // console.log("clicked inside canvas")

        let mx = p5.mouseX - p5.width / 2;
        let my = p5.mouseY - p5.height / 2;
        let pmx = p5.pmouseX - p5.width / 2;
        let pmy = p5.pmouseY - p5.height / 2;

        let hu = p5.map(p5.sin(xoff), -1,1,0,360);
        let sat = p5.map(p5.sin(xoff), -1,1,60,100);
        let light = p5.map(p5.sin(xoff), -1,1,30,100);
        xoff += 1;
        
        p5.stroke(hu, sat, light, 100);

        for (let i = 0; i < symmetry; i++) {
          let angle = 360 / symmetry;
          p5.rotate(angle);
          p5.strokeWeight(10)
          p5.line(mx, my, pmx, pmy);
          p5.push();
          p5.scale(1, -1);
          p5.line(mx, my, pmx, pmy);
          p5.pop();
        }

    }

  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth*0.995, p5.windowHeight * 0.9);
    p5.background(...bg);
  };

  const mouseClicked = (p5) => {
    // postImage()
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