import db from '../models';

const { Book, User, BorrowDetail } = db;

// Check if book exists
export function checkBookExists(req, res, next) {
  Book
    .findOne({
      where: {
        id: req.params.bookId,
      },
    })
    .then((book) => {
      if (!book) {
        res.status(404).send("Can't find book!");
      }
      next();
    });
}

// Check if a user borrowed a particular book
export function checkUserExists(req, res, next) {
  User
    .findOne({
      where: {
        id: req.params.userId,
      },
    })
    .then((user) => {
      if (!user) {
        res.status(404).send('User does not exist!');
      } else next();
    });
}

// Check if a user borrowed a particular book
export function checkUserBorrowedBook(req, res, next) {
  BorrowDetail
    .findOne({
      where: {
        id: req.params.userId,
      },
    })
    .then((borrowdetail) => {
      if (!borrowdetail && borrowdetail.returndate !== null) {
        res.status(400).send('Book already borrowed!');
      } else next();
    });
}

// Check if a user returned a particular book
export function checkUserReturnedBook(req, res, next) {
  BorrowDetail
    .findOne({
      where: {
        id: req.params.userId,
      },
    })
    .then((borrowdetail) => {
      if (!borrowdetail && borrowdetail.returndate === null) {
        res.status(400).send('Book already returned!');
      } else next();
    });
}
