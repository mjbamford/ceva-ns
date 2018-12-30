product = datasheet.product
json.(product, :id, :name, :description)
json.(product, :information, :indications, :directions)
json.imageUrl rails_blob_url product.image
json.updatedAt product.updated_at
json.brochures product.brochures.map do |brochure|
  json.(brochure, :id, :name, :language)
  json.pdfUrl rails_blob_url brochure.pdf, disposition: 'attachment'
end
json.datasheets [ datasheet ].map do |ds|
  json.code ds.code
  json.region ds.region.name
  json.pdfUrl rails_blob_url ds.pdf, disposition: 'attachment'
end
