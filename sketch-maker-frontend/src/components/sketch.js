import React from "react";
import Sketch from "react-p5";



export default (props) => {

  let symmetry = props.state.reflections;
  let xoff = 0;
  let color = [props.state.currentColor["h"], props.state.currentColor["s"], props.state.currentColor["l"]]

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth*0.995, p5.windowHeight * 0.8).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSL, 360, 1, 1, 100);
    p5.background(...props.state.bgColor, 100);

    //declare p5 dependent functions here:
    p5.withinCanvas = () => {
      return (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) ? true : false
    }

    p5.clearCanvas = () => {
      p5.background(...props.state.bgColor, 100);
    }
    

    p5.drawRainbow = () => {
        xoff += 1;
        let hu = p5.map(p5.sin(xoff), -1,1,0,360);
        let sat = p5.map(p5.sin(xoff), -1,1,0.6,1);
        let light = p5.map(p5.sin(xoff), -1,1,0.3,1);
        return [hu, sat, light, 100]
      }
  };
  
  const draw = (p5) => {
    p5.translate(p5.width * 0.5, p5.height * 0.5);
    if (props.state.clearCanvas) {
      p5.clearCanvas()
    }

    if ( p5.mouseIsPressed && p5.withinCanvas() ) {
        let mx = p5.mouseX - p5.width / 2;
        let my = p5.mouseY - p5.height / 2;
        let pmx = p5.pmouseX - p5.width / 2;
        let pmy = p5.pmouseY - p5.height / 2;

        props.state.rainbow ? p5.stroke(p5.drawRainbow()) : p5.stroke(...color, 100);

        for (let i = 0; i < symmetry; i++) {
          let angle = 360 / symmetry;
          p5.rotate(angle);
          let d = p5.dist(mx, my, pmx, pmy)
          let sw = props.state.lineWidth
          // let sw = p5.map(d, 0, 20, 12, 1) variable strokeweight
          p5.strokeWeight(sw)
          p5.line(mx, my, pmx, pmy);
          p5.push();
          p5.scale(1, -1);
          p5.line(mx, my, pmx, pmy);
          p5.pop();
        }

    }

  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth*0.995, p5.windowHeight * 0.8);
    p5.background(...bg, 100);
  };


  return <Sketch setup={setup} draw={draw} windowResized={windowResized}  />;
};