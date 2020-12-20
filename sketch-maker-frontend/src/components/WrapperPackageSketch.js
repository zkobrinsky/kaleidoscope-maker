const { Faker } = require('fakergem');

let wordChoices = [Faker.Hipster.words(1).join(" ")+" "+Faker.Space.planet().toLowerCase(), 
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.star().toLowerCase(), 
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.constellation().toLowerCase(),
    Faker.Hipster.words(1).join(" ")+" "+Faker.Space.starCluster().toLowerCase()]

export default function WrapperPackageSketch (p5) {

    let placeHolder = wordChoices[parseInt(Math.random()*wordChoices.length)]
    let angle = 0;


    p5.setup = function () {
        p5.createCanvas(p5.windowHeight * 0.8, p5.windowHeight * 0.8);
        p5.angleMode(p5.DEGREES);
        p5.rectMode(p5.CENTER);
    }

    p5.draw = function () {
        p5.background(200, 60, 60);
        p5.translate(p5.width * 0.5, p5.height * 0.5);
        p5.rotate(angle);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(30);
        p5.text("Hello from p5.js", 0, 0);
        angle++

    }

    p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation !== null){
        angle = props.rotation;
      }
  }

    p5.windowResized = function(props) {
        p5.resizeCanvas(p5.windowHeight * 0.8, p5.windowHeight * 0.8);
      };
    
      p5.mouseClicked = function(props) {
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



   
    

};