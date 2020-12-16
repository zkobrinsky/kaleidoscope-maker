class User < ApplicationRecord
    has_one_attached :image
    include Rails.application.routes.url_helpers


    def image_url
        url_for(self.image)
    end
end

