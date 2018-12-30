class AddLanguageToDatasheets < ActiveRecord::Migration[5.2]
  def change
    add_column :datasheets, :language, :string
    Datasheet.update_all language: 'arabic'
    change_column :datasheets, :language, :string, null: false
  end
end
