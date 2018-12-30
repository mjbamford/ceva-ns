Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :products, only: %i[ index show ]
    resources :stocks, param: :code, only: :show
  end

  get '*path', to: "application#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # This route always to be below the catch-all routes above; it is provided
  # here merely for the named route helper. The path '/q/:code' is to be
  # catched by the catch-all and routed to application#index for react
  # handling.
  get 'q/:code', to: 'stocks#show', as: 'codified_stock'
end
