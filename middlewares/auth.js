const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const auth = {
  // Middleware to check if the user is authenticated
  checkAuth: async (req, res, next) => {
    try {
      // get the token from the cookie
      const token = req.cookies.token;

      // if there is no token, return an error
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // verify the token
      const decoded = jwt.verify(token, JWT_SECRET);

      // set the user id in the request object
      req.userId = decoded.userId;
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    next();
  },
};

module.exports = auth;
