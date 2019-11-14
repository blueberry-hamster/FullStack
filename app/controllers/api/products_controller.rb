class Api::ProductsController < ApplicationController
  def index
    @products = Product.with_attached_photos.all 
      .includes(:product_category)
      .includes(:category)

    @product_categories = ProductCategory.all
    render '/api/products/index'
  end

  def show
    name = params[:name].gsub('-', ' ')
    @product = Product
      .with_attached_photos
      .includes(:variations)
      .includes(:description)
      .includes(:instruction)
      .includes(:size)
      .includes(:product_size)
      .includes(:category)
      .includes(:product_category)
      .includes(:ingredients)
      .includes(:product_ingredient)
      .includes(:tags)
      .includes(:product_tag)
      .find_by(name: name)
      
    render "/api/products/show"
  end
end
