class SketchesController < ApplicationController
    def create
        sketch = Sketch.last
        sketch.image.attach(params[:image])
        render json: {"imageUrl": url_for(sketch.image)}.to_json
    end

    def show
        sketch = Sketch.last
        render:json => sketch, methods: :image_url
        # render json: {"imageUrl": url_for(sketch.image)}.to_json
    end
end
