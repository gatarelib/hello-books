import db from '../models';

const { User, Book, BorrowDetail, Notification, Sequelize } = db;

/**
 * Check if admin status of current user
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
export function checkIfAdmin(res, req, next) {
}

/**
 * Check if current user is logged in
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
export function checkIfLoggedIn(res, req, next) {
  
}
