const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const authController = {
  register: async (req, res) => {
    try {
      // get the user inputs
      const { name, email, password } = req.body;
      // check if the user already exists
      const user = await User.findOne({ email });

      // if the user exists, return an error
      if (user) {
        return res.status(500).json({ message: "User already exists" });
      }

      // hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      // save the user
      await newUser.save();

      // return a success message
      res.status(201).json({ message: "User registered!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      // get the user inputs
      const { email, password } = req.body;

      // check if the user exists
      const user = await User.findOne({ email });

      // check if the password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      // if the password is incorrect, return an error
      if (!isPasswordCorrect) {
        return res.status(500).json({ message: "Invalid credentials" });
      }

      // create a token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3h",
      });

      // set the token in the cookie
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 3 * 60 * 60 * 1000,
        secure: true,
        path: "/",
      });

      // return a success message
      res.status(200).json({ message: "User logged in!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      // clear the token in the cookie
      res.clearCookie("token");

      // return a success message
      res.status(200).json({ message: "User logged out!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  me: async (req, res) => {
    try {
      // get the user id from the request object
      const userId = req.userId;

      // get the user details from the database
      const user = await User.findById(userId).select("-password -__v");

      // return the user details
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
