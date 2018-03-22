class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker
  has_many :debts
  has_many :equities
  has_many :preferreds
end
