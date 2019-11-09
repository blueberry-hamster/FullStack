class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    @product_categories = ProductCategory.all
    render '/api/products/index'
  end

  def show
    @product = Product.find_by(name: params[:name])
    render "/api/products/show"
  end
end
