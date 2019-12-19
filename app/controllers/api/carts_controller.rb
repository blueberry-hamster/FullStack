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
    @cart = Cart.find_by(user_id: current_user.id)
    render :show
  end
end
