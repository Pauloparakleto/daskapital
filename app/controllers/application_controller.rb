class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # Restrict the browsers only when a bug appears.
  # allow_browser versions: :modern
  around_action :sentry_exception

  protected

  def sentry_exception
    begin
      yield
    rescue StandardError => exception
      Sentry.capture_exception(exception)
      raise exception
    end
  end
end
