import express from 'express';
import { homeController, devController, queryController } from '../controllers/controller';

const router = express.Router();

// TEST //
const userController = require('../controllers').user;

router
  .route('/api/test/user')
  .post(userController.create);
// TEST //


router
  .route('')
  .get(homeController);

router
  .route('/api/v1/user/signup')
  .post(devController);

router
  .route('/api/v1/users/signin')
  .post(devController);

router
  .route('/api/v1/books')
  .post(devController);

router
  .route('/api/v1/books/:bookId')
  .put(devController);

router
  .route('/api/v1/books')
  .get(devController);

// Match query string of pattern /\?returned=(true|false)/
function matchQueryString(req, res, next) {
  return next(req.query.returned ? null : 'false');
}

router
  .route('/api/v1/users/:userId/books')
  .get(matchQueryString, queryController);

router
  .route('/api/v1/users/:userId/books')
  .post(devController);

router
  .route('/api/v1/users/:userId/books')
  .put(devController);

export default router;
