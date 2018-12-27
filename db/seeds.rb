# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin_email = 'admin@example.com'

if Rails.env.development? and not (AdminUser.find_by email: admin_email)
  AdminUser.create!(email: admin_email, password: 'password', password_confirmation: 'password')
end

if Region.count.zero?
  Region.create! [
    { name: 'UAE', code: 2 },
    { name: 'Qatar', code: 4 },
    { name: 'Bahrain', code: 6 },
    { name: 'Oman', code: 8 }
  ]
end
