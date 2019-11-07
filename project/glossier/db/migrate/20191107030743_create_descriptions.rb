class CreateDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :descriptions do |t|
      t.string :product_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.text :notes, null: false

      t.timestamps
    end
    add_index :descriptions, :product_id, unique: true
  end
end
