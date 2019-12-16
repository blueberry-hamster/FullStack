class Api::CartsController < ApplicationController
  def show
    # @cart = Cart.find(params[:id])
    @cart = Cart.find_by(user_id: current_user.id)
    # @cart = current_user.cart
    # render "/api/carts/#{ @cart.id }"
    render :show
  end
end
