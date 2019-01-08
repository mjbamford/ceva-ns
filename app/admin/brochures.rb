ActiveAdmin.register Brochure do
  actions :all, except: :destroy
  permit_params :name, :language, :pdf

  filter :name
  filter :language, as: :select, collection: -> { options_for_language }
  filter :updated_at

  index do
    id_column
    column :name
    column('Language') { |brochure| brochure.language.capitalize }
    column('Filename') do |brochure|
      brochure.pdf.attached? ? brochure.pdf.filename.to_s : '&nbsp;'.html_safe
    end
    column('Preview') do |brochure|
      if brochure.pdf.attached?
        path = rails_blob_path brochure.pdf, disposition: 'attachment'
        html = if brochure.pdf.previewable?
          image_tag brochure.pdf.preview resize: '100x100'
        else
          'download'
        end
        link_to html, path
      end
    end
    column :updated_at
    actions
  end

  show do
    attributes_table do
      row :name
      row('language') { resource.language.capitalize }
      if resource.pdf.attached?
        path = rails_blob_path resource.pdf, disposition: 'attachment'
        html = if resource.pdf.previewable?
          image_tag resource.pdf.preview resize: '300x300'
        else
          'download'
        end
        row('filename') { resource.pdf.filename.to_s }
        row('pdf') { link_to html, path }
      end
    end
  end

  form do |f|
    semantic_errors *f.object.errors.keys
    inputs do
      input :name
      input :language, as: :radio, collection: options_for_language
      options = { as: :file }
      if f.object.pdf.try(:previewable?)
        options[:hint] = image_tag f.object.pdf.preview resize: '300x300'
      end
      input :pdf, options
    end
    actions
  end
end

