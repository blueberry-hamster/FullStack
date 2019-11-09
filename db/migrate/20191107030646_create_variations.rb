class CreateVariations < ActiveRecord::Migration[5.2]
  def change
    create_table :variations do |t|
      t.integer :product_id, null: false
      t.string :variation_type, null: false
      t.string :name, null: false
      t.boolean :primary, default: true, null: false
      t.integer :stock, default: 100, null: false

      t.timestamps
    end
    add_index :variations, :product_id, unique: true
  end
end
