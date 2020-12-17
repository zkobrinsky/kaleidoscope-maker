class RemoveColorsFromSketches < ActiveRecord::Migration[5.2]
  def change
    remove_column :sketches, :colors, :string
  end
end
