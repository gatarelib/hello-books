import db from '../models';

const { User, Book, BorrowDetail, Notification, Sequelize } = db;

/**
 * Return an array of all books in the database
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{json} all books
 */
export function getBooks(req, res) {
  return Book
    .all()
    .then(books => res.status(200).send(
      books,
    ))
    .catch(err => res.status(404).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Add book details specified in request to the database
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{json} added book
 */
export function addBook(req, res) {
  return Book
    .create({
      title: req.body.title,
      isbn: req.body.isbn,
      year: req.body.year,
      author: req.body.author,
      description: req.body.description,
      count: req.body.count,
    })
    .then(book => res.status(200).send(
      book,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Get the list of a user's borrowed but unreturned books
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{json} user borrowed books
 */
export function getUserBooks(req, res) {
  return BorrowDetail
    .findAll({
      where: {
        userid: req.params.userId,
        returndate: null,
      },
    })
    .then(books => res.status(200).send(
      books,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Modify book information already in database
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{string} update status
 */
export function modifyBook(req, res) {
  return Book
    .update({
      title: req.body.title || Book.title,
      isbn: req.body.isbn || Book.isbn,
      year: req.body.year || Book.year,
      author: req.body.author || Book.author,
      description: req.body.description || Book.description,
      count: req.body.count || Book.count,
    },
    {
      where: {
        id: req.params.bookId,
      },
    })
    .then(book => res.status(200).send(book[0] === 1 ? 'Book update successful!' : 'Book update not successful!'))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Gives user access to a book if available
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{json} borrowdetail
 */
export function borrowBook(req, res) {
  return BorrowDetail
    .create({
      booktitle: req.body.booktitle,
      borrowdate: Date.now(),
      userid: req.params.userId,
    })
    .then(borrowdetail => res.status(200).send(
      borrowdetail,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Marks a book as returned in a user borrow history
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{string} borrow status 
 */
export function returnBook(req, res) {
  return BorrowDetail
    .update({
      returndate: Date.now(),
      userid: req.params.userId,
    },
    {
      where: {
        userid: req.params.userId,
      },
    })
    .then(borrowdetail => res.status(200).send(borrowdetail[0] === 2 ? 'Book returned successfully!' : 'Book not returned!'))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

// For test purpose only
export function createNotif(req, res) {
  return Notification
    .create({
      sender: req.body.sender,
      reciever: req.body.reciever,
      message: req.body.message,
      sentdate: Date.now(),
      userid: req.body.userid,
    })
    .then(notif => res.status(200).send(
      notif,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

// For test purpose only
export function getUserNotifs(req, res) {
  const idParam = req.params.userId;
  return Notification
    .findAll({
      where: { userid: idParam },
    })
    .then(notifs => res.status(200).send(
      notifs,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}
