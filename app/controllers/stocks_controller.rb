class StocksController < ApplicationController
  helper_method :stock

  private def stock
    @stock ||= Stock.find_by code: params[:code]
  end
end
