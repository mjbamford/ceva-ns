class CreateDatasheets < ActiveRecord::Migration[5.2]
  def change
    create_table :datasheets do |t|
      t.references :product, index: true, null: false
      t.references :region, index: true, null: false
      t.string :code, null: false
      t.timestamps
    end

    add_index :datasheets, :code, unique: true
  end
end
