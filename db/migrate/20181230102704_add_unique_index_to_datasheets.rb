class AddUniqueIndexToDatasheets < ActiveRecord::Migration[5.2]
  def change
    add_index :datasheets, %i[product_id region_id], unique: true
  end
end
