class SketchesController < ApplicationController

    def index
        sketches = Sketch.all
        render :json => sketches
    end

    def show
        sketch = Sketch.find_by_id(params[:id])
        render:json => sketch
    end

    def create
        sketch = Sketch.last

        # http object way (sent url variable)
        image = params[:image]
        # image = params[:image].split("/").last.gsub("-","")
        # sketch.image.attach(image)
        
        debugger;
        # # method for sending actual blob (not url):
        # File.open('mysketch.png', 'wb') {|f| f.puts params[:image].read}
        # sketch.image.attach(io: File.open("./mysketch.png"), filename: "mysketch.png", content_type: "image/png")

        # byebug
        
    end

end
