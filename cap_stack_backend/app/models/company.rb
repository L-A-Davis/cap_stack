class Company < ApplicationRecord
  has_many :debts, dependent: :destroy
  has_many :equities, dependent: :destroy
  has_many :preferreds, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :ticker, uniqueness: true
end
