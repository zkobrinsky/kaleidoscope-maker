# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Sketch.destroy_all
Color.destroy_all

word_choices = [Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.planet.downcase, 
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.star.downcase,
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.constellation.downcase,
Faker::Hipster.words(number: 1).join(" ")+" "+Faker::Space.star_cluster.downcase]

20.times do
    # creates random hsb values
    Color.create(value: [rand(0..360), rand(0..100), rand(0..100)])
end

10.times do
    sketch = Sketch.new(title: word_choices.sample, reflections: rand(0..9))
    5.times do 
        sketch.colors << Color.all.sample
    end
    sketch.save
    sketch.image.attach(io: File.open('./db/seed_assets/181112_01320.jpg'), filename: '181112_01320.jpg')
    # backend\db\seed_assets
end