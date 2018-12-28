ActiveAdmin.register Stock do
  belongs_to :product
  navigation_menu :product

  permit_params :product_id, :region_id, :datasheet

  form do |f|
    inputs "Stock details" do
      input :region, as: :radio
      input :datasheet, as: :file
    end
    actions
  end
end
