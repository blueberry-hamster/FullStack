class Api::OrdersController < ApplicationController
  def create
    debugger
    @order = Order.new(order_params)
    if @order.save
      render 'api/orders/show'
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def show
    @order = Order.find_by(id: order_params.id)
    render 'api/orders/show'
  end

  def index
     @orders = Order.find_by(user_id: order_params.user_id)
     render 'api/orders/index'
  end
end
