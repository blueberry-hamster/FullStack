Rails.application.routes.draw do
  namespace :api do
    get 'categories/index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :products, only: [:index]
    resources :products, only: [:show], param: :name
  end
end
