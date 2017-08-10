import jwt from 'jsonwebtoken';
/**
 * Verify if user is currently logged in
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
export function verifyUserSession(req, res, next) {
  const token = req.body.token || req.headers.token;
  if (!token) {
    res.status(403).send('Session token is required!');
  } else {
    // Check if token matches the one provided at login
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        res.status(500).send('Invalid token!');
      } else {
        next();
      }
    });
  }
}


/**
 * Check if admin status of current user
 * @param{Object} req - api request
 * @param{Object} res - route response
 * @param{Object} next - jumping to next handler
 * @return{undefined}
 */
export function verifyAdminStatus(req, res, next) {
  const token = req.body.token || req.headers.token;
  if (!token) {
    res.status(403).send('Session token is required!');
  } else {
    // Check if token matches the one provided at login
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      // Check id session is of admin
      if (decoded.isadmin !== true) {
        res.status(401).send('Unauthorized access!');
      } else next();
    });
  }
}

