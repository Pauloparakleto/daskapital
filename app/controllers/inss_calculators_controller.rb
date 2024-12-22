class InssCalculatorsController < ApplicationController
  def new
  end

  def show
    @inss_calculator = Calculator::Inss.new(salary: salary_params)
  end

  def calculate
    redirect_to action: :show, salary: salary_params
  end

  private

  def salary_params
    params.fetch(:salary, 0)
  end
end
