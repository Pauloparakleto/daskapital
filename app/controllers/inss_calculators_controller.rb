class InssCalculatorsController < ApplicationController
  def index
  end

  def show
    salary = params.fetch(:salary, 0)
    @inss_calculator = Calculator::Inss.new(salary: salary)
  end

  def calculate
    redirect_to action: :show, salary: params.fetch(:salary, 0)
  end
end
