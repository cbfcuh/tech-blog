# Tech Blog

## Description

This Tech Blog is built using the MVC architecture, Handlebars.js, and various packages to create a simple and interactive blogging platform. Users can browse blog posts without needing to log in, but after registering and signing in, they can contribute by adding new posts and commenting on existing ones. The backend is powered by API routes, while Handlebars.js is used to render the frontend. Developing this application has been both challenging and rewarding, deepening my understanding of MVC principles and how to integrate routes with Handlebars for dynamic front-end rendering.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Features](#features)
- [Future Development](#future-development)
- [Questions](#questions)

## Installation

To utilise the Tech Blog, users must first clone the repository. Once cloned, with VS Code's terminal the user must copy the .env.example file and enter their PostgresSQL details. 
<ul>Run "npm i" in the terminal to install the required packages</ul>
<ul>Start the server by running npm start and check if the server is working by looking for the "App listening" message</ul>
<ul>Once you see the message, exit the server</ul>
<ul>To set up the database:
<ul>Open the shell and run the database by typing psql -U postgres in the terminal</ul>
<ul>Enter your password when prompted</ul>
<ul>Run \i schema.sql to initialize the database</ul>
<ul>Once the database is initialized, exit the shell</ul>
<ul>To seed the database with sample data, run npm run seeds in the VS Code terminal</ul></ul>

Finally, to start the server, run npm start again in VS Code.

## Usage

[Visit the live site here.]()

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under [MIT License](https://opensource.org/licenses/MIT).

## Credits

Assistance for this project was provided by the AI Xpert Learning Assistant within Bootcamp Spot. This assistance included answering questions, explaining concepts, debugging code and providing code examples. Assistance was also provided via the class Instructor in Office Hours, who helped in providing direction and explaining concepts related to the project, and via several Bootcamp Tutors who assisted in debugging code errors and providing guidance.

## Contributing

If you would like to contribute to the project and make it better, please feel free.

## Features

- Utilise MVC architecture
- Utilise Handlebars.js
- Users can signup, login and logout
- Users can post and comment on blogs

## Future development

Future development goals for this application include completeing the acceptance criteria and upgrading the styling of the site.

## Questions

For any questions, please reach out to me on GitHub [here](https://github.com/cbfcuh) 