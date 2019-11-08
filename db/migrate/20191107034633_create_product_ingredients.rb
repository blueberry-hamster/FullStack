class CreateProductIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :product_ingredients do |t|
      t.string :product_id, null: false
      t.string :ingredient_id, null: false

      t.timestamps
    end
    add_index :product_ingredients, :product_id
    add_index :product_ingredients, :ingredient_id
  end
end
