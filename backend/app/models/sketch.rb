class Sketch < ApplicationRecord
    # alias_attribute :bg_color, :color
    # has_one :bg_color, through: :colors_sketches,
    # try to set up bg color laters
    
    # has_one :bg_color, through: :colors_sketches, class_name: "ColorsSketch", :foreign_key => "color_id"
    has_one_attached :image
    
    has_many :colors_sketches
    has_many :colors, through: :colors_sketches
    include Rails.application.routes.url_helpers


    def image_thumbnail
        if self.image.attached?
            url_for(self.image.variant(:gravity=>"Center", resize: "800x800>"))
        end
    end

    def image_full
        if self.image.attached?
            url_for(self.image.variant(:gravity=>"Center"))
        end
    end


end
