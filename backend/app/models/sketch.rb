class Sketch < ApplicationRecord
    has_one_attached :image
    has_many :colors_sketches
    has_many :colors, through: :colors_sketches
    include Rails.application.routes.url_helpers


    def image_url
        url_for(self.image)
    end
end
