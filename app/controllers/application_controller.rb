class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # Restrict the browsers only when a bug appears.
  # allow_browser versions: :modern
end
