class CreateProductsRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :products_regions do |t|
      t.references :product
      t.references :region
      t.string :code
      t.timestamps
    end
  end
end
