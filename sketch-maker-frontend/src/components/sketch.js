import React from "react";
import Sketch from "react-p5";
 
export default (props) => {
    let angle = 0;
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.windowWidth, p5.windowHeight*0.995).parent(canvasParentRef);
        let canvas = document.querySelector("#defaultCanvas0")
        canvas.toBlob(b => {
            console.log(blobToFile(b, "img"))
            // fetch post request with blobToFile(b, "img") as obj
        })
        p5.angleMode(p5.DEGREES)
        p5.rectMode(p5.CENTER)
        // debugger;
    };
 
    const draw = (p5) => {
        p5.background(200, 60, 60);
        p5.translate(p5.width*0.5, p5.height*0.5);
        p5.rotate(angle)
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(30)
        p5.text("Hello", 0, 0);
        angle++;
    };



    const blobToFile = (blob, fileName) => {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob
    }
 
    return <Sketch setup={setup} draw={draw} />;
};