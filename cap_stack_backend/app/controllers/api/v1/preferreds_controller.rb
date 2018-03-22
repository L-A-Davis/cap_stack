class Api::V1::PreferredsController < ApplicationController

  def index
    @preferreds = Preferred.all
    render json: @preferreds
  end

  def create
    @preferred = Preferred.create(preferred_params)
    render json: @preferred, status: 201
  end

  def new
    @preferred = Preferred.new
  end

  def edit
    @preferred = Preferred.find(params[:id])
  end

  def update
    @preferred = Preferred.find(params[:id])
    @preferred.update(preferred_params)
    @preferred.save
    render json: @preferred
  end

  def show
    @preferred = Preferred.find(params[:id])
    render json: @preferred, status: 200
  end

  def destroy
    @preferred = Preferred.find(params[:id])
    @preferred.destroy
    render json: {message:"Preferred Deleted"}
  end

  private
    def preferred_params
      params.require(:preferred).permit(:name,  :placement_amount, :rate, :maturity,  :cash_payment_timing, :company_id)
    end


end
