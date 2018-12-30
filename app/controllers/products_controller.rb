class ProductsController < ApiController
  before_action :set_product, only: :show

  def index
    @products = Product.includes(image_attachment: :blob).order(id: :desc).all
  end

  private def set_product
    @product = Product.find(params[:id])
  end
end
