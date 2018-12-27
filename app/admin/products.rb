ActiveAdmin.register Product do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  permit_params :name, :description, :information, :indications, :directions, :image

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
      column :sku
      column :name
      column :description
      column :updated_at
      actions
  end

  show do
    attributes_table do
      row :name
      row :sku
      row :description
      row :image do |product|
        image_tag product.image.variant resize: '300x300'
      end
      row :information
      row :indications
      row :directions
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors
    inputs do
      input :name
      input :image, as: :file, hint: image_tag(f.object.image.variant(resize: '300x300'))
      input :sku
      input :description
      input :information
      input :indications
      input :directions
    end
    actions
  end
end
