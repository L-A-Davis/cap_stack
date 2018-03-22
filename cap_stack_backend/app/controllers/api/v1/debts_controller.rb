class Api::V1::DebtsController < ApplicationController

  def index
    @debts = Debt.all
    render json: @debts
  end

  def create
    @debt = Debt.create(debt_params)
    render json: @debt, status: 201
  end

  def new
    @debt = Debt.new
  end

  def edit
    @debt = Debt.find(params[:id])
  end

  def update
    @debt = Debt.find(params[:id])
    @debt.update(debt_params)
    @debt.save
    render json: @debt
  end

  def show
    @debt = Debt.find(params[:id])
    render json: @debt, status: 200
  end

  def destroy
    @debt = Debt.find(params[:id])
    @debt.destroy
    render json: {message:"Debt Deleted"}
  end

  private
    def debt_params
      params.require(:debt).permit(:name, :category, :current_amount, :placement_amount, :rate, :rate_type, :payment_type, :maturity, :amort_date, :monthly_payment, :secured, :payment_calc, :cash_payment_timing, :company_id)
    end


end
