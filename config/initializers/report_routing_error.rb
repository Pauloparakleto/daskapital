# config/initializers/report_routing_error.rb

ActionDispatch::DebugExceptions.register_interceptor do |req, exception|
  if exception.is_a? ActionController::InvalidAuthenticityToken
    p [ "InvalidAuthenticityToken Exception", req, exception ]
    Sentry.capture_exception(exception)
    Sentry.capture_message("Add https protocol to the site")
  end
end
