class CreateBrochures < ActiveRecord::Migration[5.2]
  def change
    create_table :brochures do |t|
      t.string :name, null: false
      t.string :language, null: false
      t.timestamps
    end

    add_index :brochures, [ :name, :language ], unique: true

    create_table :brochures_products do |t|
      t.references :brochure, index: true
      t.references :product, index: true
      t.timestamps
    end

    add_index :brochures_products, [ :brochure_id, :product_id ], unique: true
  end
end
