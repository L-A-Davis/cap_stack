# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.create(name: "ABC Corp", ticker: "ABC")
Company.create(name: "DEF Corp", ticker: "DEF")

Debt.create(name: "Mortgage Debt 1", category: "mortgage", current_amount: 145.346, rate: 0.0455, rate_type: "fixed", secured: true, payment_type: "amortization", maturity: Time.new(2020, 11, 30), company_id: 1)

Debt.create(name: "Mortgage Debt 2", category: "mortgage", current_amount: 200, rate: 0.065, rate_type: "fixed", secured: true, payment_type: "interest_only", maturity: Time.new(2022, 6, 30), company_id: 1)

Debt.create(name: "Revolver", category: "credit_facility", current_amount: 150.457, rate: 0.025, rate_type: "floating", secured: false, payment_type: "interest_only", maturity: Time.new(2019, 5, 31), company_id: 1)
