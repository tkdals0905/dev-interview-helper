const { User, Card } = require('../models');
const bcrypt = require('bcrypt');
const { isAuth } = require('./auth');
const {
  generateAccessToken,
  sendToken,
  checkToken,
  generateRefreshToken,
} = require('./functions/jwtToken');

const { hashPassword } = require('./functions/security');

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      const exUser = await User.findOne({
        where: {
          email,
        },
      });
      if (exUser) {
        return res.status(403).send('이미 사용중인 이메일입니다.');
      }

      const hashPw = await hashPassword(password);

      await User.create({
        email,
        username,
        password: hashPw,
      });

      return res.status(201).send('OK');
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const userInfo = await User.findOne({ where: { email } });
      if (!userInfo) {
        return res.status(403).json({
          success: false,
          message: '이메일 이 존재하지 않습니다.',
        });
      }
      const match = await bcrypt.compare(
        password,
        userInfo.dataValues.password,
      );
      if (!match) {
        return res.status(403).json({
          success: false,
          message: '비밀번호가 잘못되었습니다.',
        });
      }
      const user = userInfo.dataValues;

      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: ['id', 'username', 'email'],
      });
      const newAccessToken = generateAccessToken(
        userWithoutPassword.dataValues,
      );
      const newRefreshToken = generateRefreshToken();
      sendToken(res, newAccessToken, newRefreshToken);
      return res.status(200).json(userWithoutPassword);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  logout: async (req, res, next) => {
    try {
      // 로그아웃 할 때는 쿠키를 삭제한다.
      res.clearCookie('refreshToken');
      res.clearCookie('accessToken');
      // 로그아웃 성공시 200을 보냄.
      res.status(200).json({ message: 'ok' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
    }
  },

  //   patch /user/:userId/username    body:{username: '바보'}
  editUsername: async (req, res, next) => {
    try {
      const userInfo = await isAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '로그인 하셔야합니다.' });
      }

      const { username } = req.body;
      await User.update(
        {
          username,
        },
        {
          where: {
            id: userInfo.dataValues.id,
          },
        },
      );
      return res.status(200).json({ message: 'ok' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
      next(err);
    }
  },
  editPwd: async (req, res, next) => {
    try {
      const userInfo = await isAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '로그인 하셔야합니다.' });
      }

      const { password_now, password } = req.body;
      const match = await bcrypt.compare(
        password_now,
        userInfo.dataValues.password,
      );
      if (!match) {
        return res.status(403).json({
          success: false,
          message: '비밀번호가 잘못되었습니다.',
        });
      }
      const hashPw = await hashPassword(password);
      await User.update(
        {
          password: hashPw,
        },
        {
          where: {
            id: userInfo.dataValues.id,
          },
        },
      );
      return res.status(200).json({ message: 'ok' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
      next(err);
    }
  },

  signout: async (req, res, next) => {
    try {
      const userInfo = await isAuth(req, res);
      if (!userInfo) {
        return res.status(400).json({ message: '로그인 하셔야합니다.' });
      }
      const userId = userInfo.dataValues.id;
      await Card.destroy({
        where: { UserId: userId },
      });
      await User.destroy({
        where: { id: userId },
      });
      // 쿠키 삭제
      res.clearCookie('refreshToken');
      res.clearCookie('accessToken');
      res.status(200).json({ userId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'server error' });
    }
  },
};
