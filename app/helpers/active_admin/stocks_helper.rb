require 'barby'
require 'barby/barcode'
require 'barby/barcode/qr_code'
require 'barby/outputter/png_outputter'

module ActiveAdmin::StocksHelper
  def qrcode_image(text)
    barcode = Barby::QrCode.new(text, level: :l, size: 2)
    base64_output = Base64.encode64(barcode.to_png({ xdim: 5 }))
    "data:image/png;base64,#{base64_output}"
  end
end
