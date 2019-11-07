class CreateProductSizes < ActiveRecord::Migration[5.2]
  def change
    create_table :product_sizes do |t|
      t.string :product_id, null: false
      t.string :size_id, null: false

      t.timestamps
    end
    add_index :product_sizes, :product_id
    add_index :product_sizes, :size_id
    
  end
end
