class InssCalculator
  attr_accessor :salary
  attr_reader :contribution

  def initialize(salary: 0)
    @salary = salary
    @contribution = salary
  end
end
