class UsersController < ApplicationController

    def create
        user = User.last
        user.image.attach(params[:image])
        render json: {"imageUrl": url_for(user.image)}.to_json
    end

    def show
        user = User.last
        # debugger
        render:json => user, methods: :image_url
        # render json: {"imageUrl": url_for(user.image)}.to_json
    end
end
