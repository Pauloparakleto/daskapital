module Calculator
  class Inss
    attr_accessor :salary
    attr_reader :contribution

    def initialize(salary: 0)
      @salary = salary
      @calculator ||= InssCalculator::DiscountPrevidenceCalculator.new(salary)
      @contribution = @calculator.contribution
    end
  end
end
