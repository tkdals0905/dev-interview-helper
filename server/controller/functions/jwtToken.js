require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  // Access token으로 sign
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' });
  },
  // JWT 토큰을 쿠키로 전달
  sendAccessToken: (res, accessToken) => {
    const cookieOptions = {
      maxAge: 900000,
      httpOnly: true,
    };
    res.cookie('accessToken', accessToken, cookieOptions);
  },
  // JWT 토큰 정보를 받아서 검증
  checkAccessToken: (accessToken) => {
    try {
      return jwt.verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
