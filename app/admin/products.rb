ActiveAdmin.register Product do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters

  actions :all, except: [ :destroy ]

  includes :brochures, datasheets: :region

  permit_params do
    permitted = %i[ name description information indications directions image ]
    permitted << { brochure_ids: [] }
  end

  filter :name
  filter :description
  filter :information
  filter :indications
  filter :directions

  index do
      id_column
      column "Image" do |product|
        if product.image.attached?
          image_tag product.image.variant resize: '100x100'
        end
      end
      column :name
      column :description
      column :updated_at
      actions do |product|
        link_to 'Datasheets', admin_product_datasheets_path(product)
      end
  end

  show do
    attributes_table do
      row :name
      row :description
      row :image do |product|
        image_tag product.image.variant resize: '300x300'
      end
      row('Brochures') do |product|
        table_for product.brochures do
          column '', :full_name
        end
      end
      row :information
      row :indications
      row :directions
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors *f.object.errors.keys
    inputs do
      input :name
      opts = { as: :file }
      unless f.object.new_record?
        opts[:hint] = image_tag f.object.image.variant resize: '300x300'
      end
      input :image, opts
      input :brochures, as: :check_boxes
      input :description
      input :information
      input :indications
      input :directions
    end
    actions
  end

  sidebar "Datasheets", only: %i[ show edit ] do
    link_to "Datasheets", admin_product_datasheets_path(resource)
  end
end
