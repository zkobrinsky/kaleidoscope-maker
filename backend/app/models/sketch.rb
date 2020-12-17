class Sketch < ApplicationRecord
    # alias_attribute :bg_color, :color
    # has_one :bg_color, through: :colors_sketches
    # try to set up bg color laters
    
    has_one_attached :image
    
    has_many :colors_sketches
    has_many :colors, through: :colors_sketches
    include Rails.application.routes.url_helpers


    def image_url
        if self.image.attached?
            url_for(self.image)
        end
    end
end
