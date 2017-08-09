import express from 'express';
import { devTest, createUser, loginUser, createAdminUser } from '../controllers/user';
import { getBooks, addBook, getUserBooks, modifyBook, borrowBook, returnBook, createNotif, getUserNotifs } from '../controllers/book';
import { checkBookExists, checkUserExists, checkUserReturnedBook, checkUserBorrowedBook } from '../middleware/validate';
import { checkIfAdmin, checkIfLoggedIn } from '../middleware/authorize';

const router = express.Router();

// Homepage route is also a signup route
router
  .route('/')
  .get(devTest);

// Handle request for signing up on the platform 
router
  .route('/api/v1/users/signup')
  .post(createUser);

// Handle request for logging in to the application
router
  .route('/api/v1/users/signin')
  .post(loginUser);

// Handle admin request for adding a new book to the database
router
  .route('/api/v1/books')
  .post(addBook);

// Handle admin request for modifying a book in the db
router
  .route('/api/v1/books/:bookId')
  .put(checkBookExists, modifyBook);

// Handle request for getting all books in the database
router
  .route('/api/v1/books')
  .get(getBooks);

// Handle request for getting a user's borrow history
router
  .route('/api/v1/users/:userId/books')
  .get(checkUserExists, getUserBooks);

// Handle request for allowing a user to borrow a book
router
  .route('/api/v1/users/:userId/books')
  .post(checkUserExists, checkUserBorrowedBook, borrowBook);

// Handle request for allowing user to return a book
router
  .route('/api/v1/users/:userId/books')
  .put(checkUserExists, checkUserReturnedBook, returnBook);

// Secret route for admin user login
router
  .route('/api/v1/users/OX8b79Ie89Fd6sh5ysg1JR93d/signup')
  .post(createAdminUser);

// For test purpose only
router
  .route('/api/v1/users/notif')
  .post(createNotif);

// For test purpose only 
router
  .route('/api/v1/users/:userId/notif')
  .get(getUserNotifs);

export default router;
