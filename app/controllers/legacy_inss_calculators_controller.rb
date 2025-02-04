class LegacyInssCalculatorsController < ApplicationController
  before_action :inss_calculator

  def new
  end

  def show
    @inss_calculator
  end

  def calculate
    redirect_to action: :show, public: salary_params[:public], salary: salary_params[:salary]
  end

  private

  def salary_params
    params.permit(:salary, :public)
  end

  def inss_calculator
    @inss_calculator = calculator
  end

  def calculator
    @calculator = if salary_params[:public].to_i.zero?
      InssCalculator::Legacy::DiscountPrevidenceCalculator.new(salary_params[:salary])
    else
      InssCalculator::Legacy::PublicInssCalculator.new(salary_params[:salary])
    end

   InssCalculator::Decorator::Text.new(@calculator)
  end
end
