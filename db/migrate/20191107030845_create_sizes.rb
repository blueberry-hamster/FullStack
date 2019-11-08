class CreateSizes < ActiveRecord::Migration[5.2]
  def change
    create_table :sizes do |t|
      t.string :imperial, null: false
      t.string :metric, null: false

      t.timestamps
    end
    add_index :sizes, :imperial, unique: true
    add_index :sizes, :metric, unique: true
  end
end
