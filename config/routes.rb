Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope 'api' do
    resources :products, only: %i[ index show ]
    resources :datasheets, param: :code, only: :show
  end

  with_options to: 'application#index',
      constraints: -> req { !req.xhr? && req.format.html? } do |react|
    react.get 'q/:code', as: 'codified_datasheet'
    react.get '*path'
  end
end
