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
        # blob = params[:image].split("/").last.gsub("-","")
        File.open('mysketch.png', 'wb') {|f| f.puts params[:image].read}
        byebug
        # sketch.image.attach(blob)
    end

    # private
    #     def image_params
    #         require(:image).permit()
    #     end
end
