# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 


word_choices = [Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.planet.downcase, 
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.star.downcase,
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.constellation.downcase,
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.star_cluster.downcase]

20.times do
    Color.new(value: Faker::Color.hsl_color)
end

10.times do
    Sketch.new
end

    byebug