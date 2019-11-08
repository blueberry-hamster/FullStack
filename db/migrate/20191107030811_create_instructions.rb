class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.string :product_id, null: false
      t.text :steps, array: true, null: false

      t.timestamps
    end
    add_index :instructions, :product_id, unique: true
  end
end
