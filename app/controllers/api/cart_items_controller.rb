class Api::CartItemsController < ApplicationController
  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render "api/cart_items/#{ @cart_item.id }"
    else
      render json: @cart_item.errors.full_messages, status: 422
  end

  def update
    @cart_item = CartItem.find(cart_item_params[:id])
    @cart_item.destroy if cart_item_params[:quantity] == 0

    if @cart_item.update(cart_item_params)
      render "api/cart_items/#{ @cart_item.id }"
    else
      render json: @cart_item.errors.full_messages, status: 422
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
  end

  # def index
  #   @cart_items = current_user.cart_items
  #   render "api/cart_items/index"
  # end

end
