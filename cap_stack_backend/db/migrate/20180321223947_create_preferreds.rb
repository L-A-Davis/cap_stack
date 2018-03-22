class CreatePreferreds < ActiveRecord::Migration[5.1]
  def change
    create_table :preferreds do |t|
      t.references :company, foreign_key: true
      t.string :name
      t.float :rate
      t.float :placement_amount
      t.string :cash_payment_timing
      t.date :maturity

      t.timestamps
    end
  end
end
