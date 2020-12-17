class CreateSketches < ActiveRecord::Migration[5.2]
  def change
    create_table :sketches do |t|
      t.string :title
      t.string :colors
      t.string :bg_color
      t.integer :reflections

      t.timestamps
    end
  end
end
