class UsersController < ApplicationController

    def create
        user = User.last
        user.image.attach(params[:image])
        imageHash = {"imageUrl" => url_for(user.image)}
        # File.open('mysketch.png', 'wb') {|f| f.puts user.image.download}
        debugger;
        render:json => imageHash.to_json
    end

    def show
        user = User.last
        # debugger
        # render:json => user(include: [:image])
    end
end
