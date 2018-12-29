ActiveAdmin.register Stock do
  belongs_to :product
  navigation_menu :product

  permit_params :product_id, :region_id, :datasheet

  show do
    attributes_table do
      row :product
      row :region
      if resource.datasheet.attached?
        path = rails_blob_path resource.datasheet, disposition: 'attachment'
        html = if resource.datasheet.previewable?
          image_tag resource.datasheet.preview resize: '300x300'
        else
          'download'
        end
        row('datasheet') { link_to html, path }
      end
      row :code
    end
  end

  form do |f|
    semantic_errors
    inputs "Stock details" do
      input :region, as: :radio
      options = { as: :file }
      if f.object.datasheet.previewable?
        options[:hint] = image_tag f.object.datasheet.preview resize: '300x300'
      end
      input :datasheet, options
    end
    actions
  end
end
