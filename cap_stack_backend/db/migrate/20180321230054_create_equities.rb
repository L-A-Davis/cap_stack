class CreateEquities < ActiveRecord::Migration[5.1]
  def change
    create_table :equities do |t|
      t.references :company, foreign_key: true
      t.string :name
      t.date :issuance_date
      t.float :shares
      t.float :gross_proceeds
      t.float :net_proceeds
      t.float :gross_spread
      t.float :issuance_discount
      t.float :current_dividend_rate
      t.float :current_price

      t.timestamps
    end
  end
end
