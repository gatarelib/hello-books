# Hello Books
![stability wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg "stability wip")
![hound](https://camo.githubusercontent.com/23ee7a697b291798079e258bbc25434c4fac4f8b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50726f7465637465645f62792d486f756e642d6138373364312e737667 "hound")
![travis](https://travis-ci.org/AppCypher/HelloBooks.svg?branch=develop "travis")
[![coverall](https://coveralls.io/repos/github/AppCypher/HelloBooks/badge.svg?branch=develop)](https://coveralls.io/github/AppCypher/HelloBooks?branch=develop)

![hellobooks screenshot](https://github.com/AppCypher/HelloBooks/blob/api-test/template/img/screenshot.png "HelloBooks Discover Page")

An elegant material design app that implements a simple digital library for keeping, borrowing and managing all kinds of literature.

HelloBooks is proudly hosted on [heroku](https://steve-hello-world.herokuapp.com/) :smile:.


## Client Side
HelloBooks is written in EcmaScript-6 JavaScript and designed with Bootstrap and Creative-Tim material library. Icons are sourced from [material.io](material.io/icons)


## Server Side
Built with:

	 * Express for server-side logic
	 * Mocha and Chai for api tests 
	 * Postgresql for database management
	 * Heroku for hosting services 
	 * Travis CI for continuous integration
    


## Installation.
  * Install Nodejs and Postgres SQL
  * Clone this repo ``` git clone https://github.com/AppCypher/HelloBooks.git ```
  * Run ```npm install``` to install the required dependencies
  * Run ```npm test``` to fireup the tests
  * Navigate to http://localhost:3000/


## Available APIs
- API routes for users to create accounts and login to the application
  * POST : ```/api/users/signup```  (username, fullname, password, email)
  *  POST : ```/api/users/signin``` (username, password)

- An API route that allow users add new book:
  * POST : ```/api/books```

- An API route that allow users to modify a book information
  * PUT : ```/api/books/<bookId>``` (title, isbn, year, author, desc, count)

- An API route that allow users to gets all the books in the library
  * GET : ```/api/books```

- An API route that allow users to get all the books that the user has
borrowed but has not returned
  * GET : ```/api/users/<userId>/books?returned=false```

- An API route that allow user to borrow a book
  * POST : ```/api/users/<userId>/books```

- An API route that allow user to return a book
  * PUT : ```/api/users/<userId>/books```

Check [here](https://app.swaggerhub.com/apis/appcypher/HelloBooks/1.0.0) for full documentation.

## License
[Apache License 2.0](https://github.com/AppCypher/HelloBooks/blob/master/LICENSE)

