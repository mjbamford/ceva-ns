json.array! @products do |product|
  json.(product, :id, :name, :description)
  json.imageUrl url_for product.image.variant(resize: '128x128')
  json.updatedAt product.updated_at
end
