class InssCalculatorsController < ApplicationController
  before_action :inss_calculator

  def new
  end

  def show
    @inss_calculator
  end

  def calculate
    redirect_to action: :show, salary: salary_params
  end

  private

  def salary_params
    params.fetch(:salary, 0)
  end

  def inss_calculator
    calculator = InssCalculator::DiscountPrevidenceCalculator.new(salary_params)
    @inss_calculator = InssCalculator::Decorator::Text.new(calculator)
  end
end
