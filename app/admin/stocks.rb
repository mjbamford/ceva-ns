ActiveAdmin.register Stock do
  belongs_to :product
  actions :all, except: :destroy
  permit_params :product_id, :region_id, :datasheet

  filter :code
  filter :created_at
  filter :updated_at

  index do
    id_column
    column :code
    column('Url') do |stock|
      url = codified_stock_url stock.code
      link_to url, url
    end
    column :product
    column :region
    column :updated_at
    actions
  end

  show do
    attributes_table do
      row :product
      row :region
      row('url') do
        url = codified_stock_url resource.code
        link_to url, url
      end
      if resource.datasheet.attached?
        path = rails_blob_path resource.datasheet, disposition: 'attachment'
        html = if resource.datasheet.previewable?
          image_tag resource.datasheet.preview resize: '300x300'
        else
          'download'
        end
        row('datasheet') { link_to html, path }
      end
    end
  end

  form do |f|
    semantic_errors
    inputs "Stock details" do
      input :region, as: :radio
      options = { as: :file }
      if f.object.datasheet.try(:previewable?)
        options[:hint] = image_tag f.object.datasheet.preview resize: '300x300'
      end
      input :datasheet, options
    end
    actions
  end
end
