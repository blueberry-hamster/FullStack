class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # Cart.new({ cart: { user_id: @user.id } })
      Cart.new({ user_id: @user.id })
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user 
      render "/api/users/#{@user.id}"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
