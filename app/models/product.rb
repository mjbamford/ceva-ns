class Product < ApplicationRecord
  has_one_attached :image
  has_many :stocks
  has_and_belongs_to_many :brochures
end
