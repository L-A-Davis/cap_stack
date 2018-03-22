class Api::V1::EquitiesController < ApplicationController

  def index
  @equities = Equity.all
  render json: @equities
end

def create
  @equity = Equity.create(equity_params)
  render json: @equity, status: 201
end

def new
  @equity = Equity.new
end

def edit
  @equity = Equity.find(params[:id])
end

def update
  @equity = Equity.find(params[:id])
  @equity.update(equity_params)
  @equity.save
  render json: @equity
end

def show
  @equity = Equity.find(params[:id])
  render json: @equity, status: 200
end

def destroy
  @equity = Equity.find(params[:id])
  @equity.destroy
  render json: {message:"Equity Deleted"}
end

private
  def equity_params
    params.require(:equity).permit(:name, :issuance_date, :shares, :gross_proceeds, :net_proceeds, :gross_spread, :issuance_discount, :current_dividend_rate, :current_price, :company_id )
  end



end
