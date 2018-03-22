class DebtSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :rate, :payment_type, :maturity, :amort_date, :monthly_payment, :secured, :payment_calc, :cash_payment_timing, :rate_type, :current_amount, :placement_amount
end
