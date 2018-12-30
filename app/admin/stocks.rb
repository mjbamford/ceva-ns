ActiveAdmin.register Stock do
  belongs_to :product
  actions :all, except: :destroy
  permit_params :product_id, :region_id, :pdf

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
    url = codified_stock_url resource.code
    attributes_table do
      row :product
      row :region
      row('url') { link_to url, url }
      row('qr code') { image_tag qrcode_image url }
      if resource.pdf.attached?
        path = rails_blob_path resource.pdf, disposition: 'attachment'
        html = if resource.pdf.previewable?
          image_tag resource.pdf.preview resize: '300x300'
        else
          'download'
        end
        row('pdf') { link_to html, path }
      end
    end
  end

  form do |f|
    semantic_errors
    inputs "Stock details" do
      input :region, as: :radio
      options = { as: :file }
      if f.object.pdf.try(:previewable?)
        options[:hint] = image_tag f.object.pdf.preview resize: '300x300'
      end
      input :pdf, options
    end
    actions
  end
end
