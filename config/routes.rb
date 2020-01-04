Rails.application.routes.draw do
  # namespace :api do
  #   get 'orders/create'
  #   get 'orders/show'
  #   get 'orders/index'
  # end
  # namespace :api do
  #   get 'cart_items/create'
  #   get 'cart_items/update'
  #   get 'cart_items/destroy'
  #   get 'cart_items/index'
  # end
  # namespace :api do
  #   get 'carts/create'
  #   get 'carts/update'
  #   get 'carts/show'
  # end
  namespace :api do
    get 'categories/index'
  end

  namespace :api do 
    post 'carts/create'
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :products, only: [:index]
    resources :products, only: [:show], param: :name
    # resources :categories, only: [:index] ?? FIXME why doesn't this one work like the one above?
    resources :carts, only: [:show, :update]
    resources :cart_items, only: [:create, :update, :destroy]
    resources :orders, only: [:create, :show, :index]
  end
end
