class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.text :information
      t.text :indications
      t.text :directions

      t.timestamps
    end
    add_index :products, :name
  end
end
