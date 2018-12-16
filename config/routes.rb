Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :products, only: [ :index, :show ]
  end

  get '*path', to: "application#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
