class EquitySerializer < ActiveModel::Serializer
  attributes :id, :name, :issuance_date, :shares, :gross_proceeds, :net_proceeds, :gross_spread, :issuance_discount, :current_dividend_rate, :current_price
end
