require "rails_helper"

RSpec.describe Calculator::Inss, type: :model do
  describe "#contribution" do
    it "returns correct contribution" do
      expect(described_class.new(salary: 3000).contribution).to eq(253.4)
    end
  end
end
