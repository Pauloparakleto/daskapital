require 'rails_helper'

RSpec.describe "InssCalculators", type: :request do
  describe "GET /" do
    it "roots to new_inss_calculator_path" do
      get root_path

      expect(response).to have_http_status(:ok)
      expect(response).to render_template("inss_calculators/new")
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get new_inss_calculator_path

      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /inss_calculator" do
    it "returns http success" do
      get inss_calculator_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /calculate" do
    let(:valid_params) { { salary: 3000 } }

    it "returns http success" do
      post calculate_inss_calculator_path, params: valid_params

      expect(response).to redirect_to inss_calculator_path(valid_params)
    end
  end
end
