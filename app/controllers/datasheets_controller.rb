class DatasheetsController < ApplicationController
  helper_method :stock

  private def datasheet
    @datasheet ||= Datasheet.find_by code: params[:code]
  end
end
