class SketchesController < ApplicationController

    def index
        sketches = Sketch.all.order('updated_at DESC')
        render json: sketches, methods: [:image_thumbnail, :image_full], include: {:colors => {only: [:value]}}
    end

    def create
        sketch = Sketch.new(title: params[:title], reflections: params[:reflections])
        sketch.image.attach(params[:image])
        sketch.save
        render json: sketch, methods: [:image_thumbnail, :image_full], include: {:colors => {only: [:value]}}
    end

    def show
        sketch = Sketch.find_by_id(params[:id])
        render json: sketch, methods: [:image_thumbnail, :image_full], include: {:colors => {only: [:value]}}
    end

end
