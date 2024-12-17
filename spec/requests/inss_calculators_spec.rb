require 'rails_helper'

RSpec.describe "InssCalculators", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/inss_calculators/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get inss_calculators_show_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /calculate" do
    let(:valid_params) { { salary: 3000 } }

    it "returns http success" do
      post inss_calculators_calculate_path, params: valid_params
      expect(response).to redirect_to inss_calculators_show_path(valid_params)
    end
  end
end
