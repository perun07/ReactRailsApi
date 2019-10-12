# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
15.times do
    Googlereview.create(
        title: Faker::Book.title,
        author: Faker::Book.author,
        review: Faker::Quotes::Shakespeare.as_you_like_it_quote,
        rating: Faker::Book.genre
    )
end
  
  puts "Seeded database"