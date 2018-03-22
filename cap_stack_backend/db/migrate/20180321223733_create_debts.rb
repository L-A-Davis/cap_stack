class CreateDebts < ActiveRecord::Migration[5.1]
  def change
    create_table :debts do |t|
      t.references :company, foreign_key: true
      t.string :name
      t.string :category
      t.float :current_amount
      t.float :placement_amount
      t.float :rate
      t.string :payment_type
      t.string :rate_type
      t.date :maturity
      t.date :amort_date
      t.float :monthly_payment
      t.boolean :secured
      t.string :payment_calc
      t.string :cash_payment_timing

      t.timestamps
    end
  end
end
