class Api::CartsController < ApplicationController
  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render '/api/carts/show'
    else 
      render json: @cart.errors.full_messages, status: 422
    end
  end
  
  def show
    @cart = current_user.cart
    # @cart = Cart.find_by(user_id: cart_params.user_id)
    render :show
  end

  def update #reset cart only
    @cart = current_user.cart
    @cart.cart_items.each do |cart_item|
      cart_item.destroy
    end
    @cart.reload
    render :show
  end
end
