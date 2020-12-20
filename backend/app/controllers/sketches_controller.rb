class SketchesController < ApplicationController

    def index
        sketches = Sketch.all.order('updated_at DESC')
        render json: sketches, methods: :image_url, include: {:colors => {only: [:value]}}
    end

    def create
        sketch = Sketch.last #for debugging only
        # sketch = Sketch.create(sketch_params) # will be actual create method
        # byebug
        sketch.image.attach(params[:image])
        render json: sketch, methods: :image_url, include: {:colors => {only: [:value]}}
    end

    def show
        sketch = Sketch.find_by_id(params[:id])
        render json: sketch, methods: :image_url, include: {:colors => {only: [:value]}}
    end
end
