json.array! @products do |product|
  json.(product, :id, :name, :description)
  json.imageUrl url_for product.image
  json.updatedAt product.updated_at
end
