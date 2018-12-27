class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name
      t.integer :code
      t.timestamps
      t.index :name, unique: true
    end
  end
end
