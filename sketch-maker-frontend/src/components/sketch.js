import React from "react";
import Sketch from "react-p5";
 
export default (props) => {

    const blobToFile = (blob, fileName) => {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob
    }
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);
        let canvas = document.querySelector("#defaultCanvas0")
        canvas.toBlob(b => {
            console.log(blobToFile(b, "img"))
            // fetch post request with blobToFile(b, "img") as obj
        })
        // debugger;
    };
 
    const draw = (p5) => {
        p5.background(200, 60, 60);
        p5.textAlign(p5.CENTER);
        p5.textSize(30)
        p5.text("Hello", p5.width/2, p5.height/2)
        // 
        // p5.ellipse(x, y, 70, 70);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        // x++;
    };
 
    return <Sketch setup={setup} draw={draw} />;
};