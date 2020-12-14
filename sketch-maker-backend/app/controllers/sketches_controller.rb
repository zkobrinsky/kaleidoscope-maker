class SketchesController < ApplicationController

    def index
        sketches = Sketch.all
        render :json => sketches
    end

    def show
        sketch = Sketch.find_by_id(params[:id])
        render:json => sketch
    end
end
