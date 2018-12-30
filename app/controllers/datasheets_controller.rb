class DatasheetsController < ApplicationController
  helper_method :datasheet

  private def datasheet
    @datasheet ||= begin
      Datasheet.includes(:region, { pdf_attachment: :blob }, product: { brochures: { pdf_attachment: :blob }}).
        find_by(code: params[:code])
    end
  end
end
