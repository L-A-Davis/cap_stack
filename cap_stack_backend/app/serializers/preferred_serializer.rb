class PreferredSerializer < ActiveModel::Serializer
  attributes :id, :name, :rate, :placement_amount, :cash_payment_timing, :maturity
end
