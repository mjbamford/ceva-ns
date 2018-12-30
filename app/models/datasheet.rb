class Datasheet < ApplicationRecord
  has_one_attached :pdf
  belongs_to :product
  belongs_to :region
  validates :product, :region, :code, presence: true
  validates :region, uniqueness: { scope: :product_id }
  validates :code, uniqueness: true

  def initialize *args
    super
    self.code = rand(36**8).to_s(36) if self.code.nil?
  end
end
