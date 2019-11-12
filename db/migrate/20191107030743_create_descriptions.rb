class CreateDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :descriptions do |t|
      t.integer :product_id, null: false
      t.string :title, null: false
      t.text :what_it_is, null: false
      t.text :why_its_special, null: false, array: true
      t.text :good_to_know, null: false

      t.timestamps
    end
    add_index :descriptions, :product_id, unique: true
  end
end
