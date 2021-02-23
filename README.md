# Kaleidoscope Maker

This project started out as an experiment in incorporating p5.js into React, and ended up as a kaleidescope / mandala maker of sorts, based on [The Coding Train's Coding Challenge #155: Kaleidescope Snowflake Design](https://www.youtube.com/watch?v=R3C2giDfmO8).

The app relies heavily on this [react-p5 package](https://www.npmjs.com/package/react-p5) by sagetarius to create p5 sketches as React Components.

## Requirements

Must have a local postgres server running.
This application is built on Rails 5.2.4.4.
**Important Note:**
You **must** run Rails 5.2 in order for ActiveStorage to work. Newer versions of Rails **will not work**.

## Installation

```bash
cd into "backend" and run:
bundle install
```

This app utilized the "dot-env" gem to obscure your postgres credentials. After bundling, the gem should be available to you. Create a .env file in "backend," and there you can input your postgres login credentials in the following format:
POSTGRES_USER=your_postgres_username
POSTGRES_PASS=your_postgres_password

```bash
rails db:create
rails db:migrate
cd into "sketch-maker-frontend" and run:
yarn install
```

## Usage

From backend:

```bash
rails s -p 3001
```

From sketch-maker-frontend:

```bash
yarn start
```

The app should start in your browser automatically. If not, navigate to [http://localhost:3000](http://localhost:3000) in Chrome.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/zkobrinsky/p5-sketch-maker. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/zkobrinsky/p5-sketch-maker/blob/main/CODE_OF_CONDUCT.md).

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Impossible Questionnaire project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/zkobrinsky/p5-sketch-maker/blob/main/CODE_OF_CONDUCT.md).

## Acknowledgements

Thanks to my wife, my family, and my fellow Flatiron compatriots for their never-ending support, perspective and guidance. I also want to thank Allison Parrish and Dan Shiffman from NYU ITP for introducing me to javascript and creative coding, and their continued mentorship. I also want to thank the Processing Foundation for existing, for creating p5.js, and for encouraging creativity through computing worldwide.
