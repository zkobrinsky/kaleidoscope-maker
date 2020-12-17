class RemoveBgColorFromSketches < ActiveRecord::Migration[5.2]
  def change
    remove_column :sketches, :bg_color, :string
  end
end
