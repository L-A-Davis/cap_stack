# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180321230054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "ticker"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "debts", force: :cascade do |t|
    t.bigint "company_id"
    t.string "name"
    t.string "category"
    t.float "current_amount"
    t.float "placement_amount"
    t.float "rate"
    t.string "payment_type"
    t.string "rate_type"
    t.date "maturity"
    t.date "amort_date"
    t.float "monthly_payment"
    t.boolean "secured"
    t.string "payment_calc"
    t.string "cash_payment_timing"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_debts_on_company_id"
  end

  create_table "equities", force: :cascade do |t|
    t.bigint "company_id"
    t.string "name"
    t.date "issuance_date"
    t.float "shares"
    t.float "gross_proceeds"
    t.float "net_proceeds"
    t.float "gross_spread"
    t.float "issuance_discount"
    t.float "current_dividend_rate"
    t.float "current_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_equities_on_company_id"
  end

  create_table "preferreds", force: :cascade do |t|
    t.bigint "company_id"
    t.string "name"
    t.float "rate"
    t.float "placement_amount"
    t.string "cash_payment_timing"
    t.date "maturity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_preferreds_on_company_id"
  end

  add_foreign_key "debts", "companies"
  add_foreign_key "equities", "companies"
  add_foreign_key "preferreds", "companies"
end
