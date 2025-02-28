module InssCalculatorsHelper
  def legacy_inss_law_link(text = nil)
    base_url =  "https://www.in.gov.br/en/web/dou/-/portaria-interministerial-mps/mf-n-2-de-11-de-janeiro-de-2024-537035232"
    text = text || "Portaria Interministerial n. 2 de 11 de Janeiro de 2024"
    link_to text, base_url, target: "_blank"
  end

  def inss_law_link(text = nil)
    base_url =  "https://www.in.gov.br/en/web/dou/-/portaria-interministerial-mps/mf-n-6-de-10-de-janeiro-de-2025-606526848"
    text = text || "Portaria Interministerial n. 6 de 10 de Janeiro de 2025"
    link_to text, base_url, target: "_blank"
  end
end
