class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.bigint :order_number, null: false
      t.string :tracking_number
      t.float  :total
      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :order_number
  end
end
