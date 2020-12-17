class Color < ApplicationRecord
    has_many :colors_sketches
    has_many :sketches, through: :colors_sketches

end
