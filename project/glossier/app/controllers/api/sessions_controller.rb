class Api::SessionsController < ApplicationController
  def create
    email = user_params[:email]
    password = user_params[:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login!(@user)
      render plain: "success"
    else
      render plain: 'invalid email or password' 
    end
  end

  def destroy
    logout!
  end
end
