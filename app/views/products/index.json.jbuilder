json.array! @products do |product|
  json.(product, :name)
  json.imageUrl url_for product.image
  json.(product, :description, :information, :indications, :directions)
  json.updatedAt product.updated_at
end
