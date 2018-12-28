class Stock < ApplicationRecord
  has_one_attached :datasheet
  belongs_to :product
  belongs_to :region
  validates :product, :region, presence: true
  validates :region, uniqueness: { scope: :product }
end
