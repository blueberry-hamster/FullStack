class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "/"
    else
      render @user.errors.full_messages, status 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user 
      render "/api/users/#{@user.id}"
    else
      render @user.errors.full_messages, status 422
    end
  end
end
