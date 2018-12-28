class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.references :product
      t.references :region
      t.string :code
      t.timestamps
    end

    add_index :stocks, %i[product_id region_id], unique: true
  end
end
