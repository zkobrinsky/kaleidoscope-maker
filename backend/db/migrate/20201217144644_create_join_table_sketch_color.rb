class CreateJoinTableSketchColor < ActiveRecord::Migration[5.2]
  def change
    create_join_table :sketches, :colors do |t|
      t.index [:sketch_id, :color_id]
      t.index [:color_id, :sketch_id]
    end
  end
end
