# Hello Books
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

## License
[Apache License 2.0](https://github.com/AppCypher/HelloBooks/blob/master/LICENSE)

