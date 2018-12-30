json.(@product, :id, :name, :description)
json.(@product, :information, :indications, :directions)
json.imageUrl rails_blob_url @product.image
json.updatedAt @product.updated_at
json.brochures @product.brochures.map do |brochure|
  json.(brochure, :name, :language)
  json.pdfUrl rails_blob_url brochure.pdf, disposition: 'attachment'
end
json.datasheets []
