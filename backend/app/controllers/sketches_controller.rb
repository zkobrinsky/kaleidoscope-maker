class SketchesController < ApplicationController

    def index
        sketches = Sketch.all
        render json: sketches, methods: :image_url
    end

    def create
        sketch = Sketch.last
        byebug  
        sketch.image.attach(params[:image])
        render:json => sketch, methods: :image_url
    end

    def show
        sketch = Sketch.find_by_id(params[:id])
        render:json => sketch, methods: :image_url
        # render json: {"imageUrl": url_for(sketch.image)}.to_json
    end
end
