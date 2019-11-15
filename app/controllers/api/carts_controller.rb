class Api::CartsController < ApplicationController
  def show
    # @cart = Cart.find(params[:id])
    @cart = current_user.cart
    render "/api/carts/#{ @cart.id }"
  end
end
