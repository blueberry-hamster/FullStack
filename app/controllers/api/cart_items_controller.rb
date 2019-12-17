class Api::CartItemsController < ApplicationController
  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      @cart_items = current_user.cart.cart_items
      render "api/cart_items/index"
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def update
    @cart_item = CartItem.find_by(product_id: cart_item_params[:product_id])

    if @cart_item.update(cart_item_params)
      # @cart_item.destroy if cart_item_params[:quantity] == 0
      @cart_items = current_user.cart.cart_items
      render "api/cart_items/index"
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
  end

end
