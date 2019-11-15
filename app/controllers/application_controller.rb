class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    redirect_to root_url unless logged_in?
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def logout!
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def user_params 
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
  
  def cart_params
    params.require(:cart).permit(:user_id)
  end

  def cart_item_params
    params.require(:cart_item).permit(:id, :product_id, :cart_id, :quantity)
  end

end
