require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "12h" });
  },
  sendAccessToken: (res, accessToken) => {
    const cookieOptions = {
      maxAge: 900000,
      httpOnly: true,
    };
    res.cookie("accessToken", accessToken, cookieOptions);
  },
  checkAccessToken: (accessToken) => {
    try {
      return jwt.verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
