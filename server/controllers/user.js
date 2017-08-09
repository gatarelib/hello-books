import bcrypt from 'bcrypt';
import db from '../models';

const { User } = db;

/**
 * Handles request for user sign-up
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{undefined}
 */
export function createUser(req, res) {
  // Hash password to save in the database
  const password = bcrypt.hashSync(req.body.password, 10);
  return User
    .create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      password,
      membership: 'basic',
    })
    .then(user => res.status(201).send(
      user,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Handles request for sign-in with basic authentication
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{undefined}
 */
export function loginUser(req, res) {
  return User
    .findOne({
      where: { username: req.body.username },
    })
    .then((user) => {
      bcrypt.compare(req.body.password, user.password).then((check) => {
        if (check) {
          res.status(200).send('Successfully Logged in');
        }
        res.status(401).send('Wrong password or username');
      });
    })
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

/**
 * Handles request for admin user sign-up
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @return{undefined}
 */
export function createAdminUser(req, res) {
  // Hash password to save in the database
  const password = bcrypt.hashSync(req.body.password, 10);
  return User
    .create({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      password,
      membership: 'basic',
      isadmin: true,
    })
    .then(user => res.status(201).send(
      user,
    ))
    .catch(err => res.status(400).send(
      `${err.errors[0].message}!`,
    ));
}

// For test purpose only 
export function devTest(req, res) {
  res.status(200).send('Hello there!');
}
