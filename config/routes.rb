Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :products, only: %i[ index show ]
    resources :datasheets, param: :code, only: :show
  end

  get 'q/:code', to: 'datasheets#show',
    as: 'codified_datasheet', constraints: { format: 'json'}

  get '*path', to: "application#index", constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
end
