import express from 'express';
import controller from '../controller';

const router = express.Router();

router
  .route('')
  .get(controller);

router
  .route('/api/v1/user/signup')
  .get(controller);

router
  .route('/api/v1/users/signin')
  .get(controller);

router
  .route('/api/v1/users/')
  .get(controller);

router
  .route('/api/v1/books')
  .get(controller);

router
  .route('/api/v1/books/:bookId')
  .get(controller);

router
  .route('/api/v1/users/:userId/')
  .get(controller);


export default router;
