class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.references :product, null: false
      t.references :region, null: false
      t.string :code, null: false
      t.timestamps
    end

    add_index :stocks, %i[product_id region_id], unique: true
    add_index :stocks, :code, unique: true
  end
end
