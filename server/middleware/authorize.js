import db from '../models';

const { User, Book, BorrowDetail, Notification, Sequelize } = db;

// Check if admin status of current user
export function checkIfAdmin(res, req, next) {
}


// Check if current user is logged in
export function checkIfLoggedIn(res, req, next) {
  
}
