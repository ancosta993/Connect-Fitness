require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;
const expiration = process.env.EXPIRATION;

module.exports = {
   signToken: function({ username, email, _id }) {
     const payload = { username, email, _id };
 
     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },

   authMiddleware: function({ req }) {
      // take token from either the req body, query or the headers

      let token = req.body.token || req.query.token || req.headers.authorization;

      // separate bearer from the token
      if (req.headers.authorization) {
         token = token
               .split(' ')
               .pop()
               .trim()
      }
      // if no token, return req as is
      if (!token) {
         return req;
      }

      // if there is a token, then check if that token is valid using try catch method for proper error handling
      try {
         const { data } = jwt.verify(token, secret, {maxAge: expiration});
         req.user = data;
      } catch {
         console.log('Token is not Valid or expired')
      }

      // return updated request object (with user)
      return req;
   }
 };