json.(@product, :id, :name, :description)
json.(@product, :information, :indications, :directions)
json.imageUrl url_for @product.image.variant resize: '128x128'
json.updatedAt @product.updated_at
json.brochures @product.brochures.map do |brochure|
  json.(brochure, :id, :name, :language)
  json.pdfUrl rails_blob_url brochure.pdf, disposition: 'attachment'
end
json.datasheets []
