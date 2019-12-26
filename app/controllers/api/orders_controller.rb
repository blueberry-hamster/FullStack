class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def show
    @order = Order.find_by(id: order_params.id)
    render :show
  end

  def index
     @orders = Order.find_by(user_id: order_params.user_id)
     render :index
  end
end
