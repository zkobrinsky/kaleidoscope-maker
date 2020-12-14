class SketchesController < ApplicationController

    def index
        sketches = Sketch.all
        render :json => sketches
    end
end
