import React from "react";
import Sketch from "react-p5";



export default () => {
  let symmetry = Math.floor(Math.random() * (12 - 2) + 2);
  let xoff = 0;
  let bgAlpha = 0;
  let bg = [Math.random()*360+1, Math.random(), Math.random()]
  

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.noCursor()
    p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.915).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSL, 360, 1, 1, 1);
    p5.background(0)

    //declare p5 dependent functions here:
    p5.withinCanvas = () => {
      return (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) ? true : false
    }
  };
  
  const draw = (p5) => {
    if (bgAlpha < 0.2) {
    p5.background(0, 0, 0, bgAlpha*-1)
  }
    p5.background(...bg, bgAlpha);
  
    p5.translate(p5.width * 0.5, p5.height * 0.5);

    if ( p5.withinCanvas() ) {

        let mx = p5.mouseX - p5.width / 2;
        let my = p5.mouseY - p5.height / 2;
        let pmx = p5.pmouseX - p5.width / 2;
        let pmy = p5.pmouseY - p5.height / 2;

        let hu = p5.map(p5.sin(xoff), -1,1,0,360);
        let sat = p5.map(p5.sin(xoff), -1,1,0.6,1);
        let light = p5.map(p5.sin(xoff), -1,1,0.3,1);
        xoff += 1;
        
        p5.stroke(hu, sat, light, 1);

        for (let i = 0; i < symmetry; i++) {
          let angle = 360 / symmetry;
          p5.rotate(angle);
          let d = p5.dist(mx, my, pmx, pmy)
          // let sw = 8
          let sw = p5.map(d, 0, 20, 20, 3) /* variable strokeweight */
          p5.strokeWeight(sw)
          p5.line(mx, my, pmx, pmy);
          p5.push();
          p5.scale(1, -1);
          p5.line(mx, my, pmx, pmy);
          p5.pop();
        }

    }
    bgAlpha+= 0.00005;
    if (p5.frameCount % 30 == 0) {
      // console.log(bgAlpha)
    }

    if (bgAlpha > 0.02) {
      bgAlpha += 0.02;
    }
    if (bgAlpha > 1) {
      bgAlpha = 0;
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight * 0.915);
    p5.background(0)
    p5.background(...bg, bgAlpha);
  };


  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};