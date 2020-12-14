class AddImgBlobToSketches < ActiveRecord::Migration[6.1]
  def change
    add_column :sketches, :img_blob, :binary
  end
end
