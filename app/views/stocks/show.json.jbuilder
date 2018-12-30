product = stock.product
json.(product, :id, :name, :description)
json.(product, :information, :indications, :directions)
json.imageUrl url_for product.image
json.updatedAt product.updated_at
