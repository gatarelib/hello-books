import express from 'express';
import controller from '../controller';

const router = express.Router();

router
  .route('')
  .get(controller);

router
  .route('/api/user/signup')
  .get(controller);

router
  .route('/api/users/signin')
  .get(controller);

router
  .route('/api/users/')
  .get(controller);

router
  .route('/api/books')
  .get(controller);

router
  .route('/acontroller.getpi/books/:bookId')
  .get(controller);

router
  .route('/api/users/:userId/')
  .get(controller);


export default router;
