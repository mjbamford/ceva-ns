class DatasheetsController < ApplicationController
  helper_method :datasheet

  private def datasheet
    @datasheet ||= Datasheet.find_by code: params[:code]
  end
end
