class Brochure < ApplicationRecord
  has_one_attached :pdf
  has_and_belongs_to_many :brochures
  validates :name, :language, presence: true
  validates :name, uniqueness: { scope: :language }

  before_validation :strip_whitespace

  private def strip_whitespace
    self.name.strip!
  end
end
