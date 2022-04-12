const { User, Card } = require("../models");
const bcrypt = require("bcrypt");

const {
  generateAccessToken,
  sendAccessToken,
  checkAccessToken,
} = require("./functions/jwtToken");

const { hashPassword } = require("./functions/security");

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
        return res.status(403).send("이미 사용중인 이메일입니다.");
      }

      const hashPw = await hashPassword(password);

      await User.create({
        email,
        username,
        password: hashPw,
      });

      return res.status(201).send("OK");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  login: async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;

    // email과 password가 비어 있을 경우 해당 메시지 리턴. > Line 11 ~ 15) Front에서 다룬다하여 주석처리
    // if (!email)
    //   return res.json({ success: false, message: "이메일을 입력해주세요" });
    // if (!password)
    //   return res.json({ success: false, message: "비밀번호를 입력해주세요" });

    // email과 password가 정상적인 데이터일 경우
    try {
      const userInfo = await User.findOne({ where: { email } });
      if (!userInfo) {
        return res.status(403).json({
          success: false,
          message: "이메일 이 존재하지 않습니다.",
        });
      }
      const match = await bcrypt.compare(
        password,
        userInfo.dataValues.password
      );
      if (!match) {
        return res.status(403).json({
          success: false,
          message: "비밀번호가 잘못되었습니다.",
        });
      }

      const newAccessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, newAccessToken);
      const user = userInfo.dataValues;
      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: ["id", "username", "email"],
        include: [
          {
            model: Card,
            attributes: ["id", "question", "answer"],
            include: [
              {
                model: User,
                as: "Likers",
                attributes: ["id"],
              },
              {
                model: User,
                as: "Sharing",
                attributes: ["id"],
              },
              {
                model: User,
                attributes: ["id", "username"],
              },
            ],
          },
        ],
      });
      return res.status(200).json(userWithoutPassword);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  logout: async (req, res, next) => {
    try {
      // 로그아웃 할 때는 쿠키를 삭제한다.
      res.cookie("accessToken", null, { maxAge: 0 });
      // 로그아웃 성공시 200을 보냄.
      res.status(200).json({ message: "ok" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error!" });
    }
  },

  update: async (req, res, next) => {
    const userId = req.params.user_id;
    const { username, password } = req.body;
    if (username || password) {
      try {
        if (username) {
          const { username } = req.body;
          await User.update(
            { username },
            {
              where: { id: userId },
            }
          );
        }
        if (password) {
          const { password } = req.body;
          const hashPw = await hashPassword(password);
          await User.update(
            { password: hashPw },
            {
              where: { id: userId },
            }
          );
        }
        const userInfo = await User.findOne({ where: { id: userId } });

        res.status(200).json({ message: "정보수정완료 ", userInfo });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
      }
    } else {
      res.status(422).json({ message: "insufficient parameters supplied" });
    }
  },

  signout: async (req, res, next) => {
    const userId = req.params.user_id;
    try {
      await User.destroy({
        where: { id: userId },
      });
      // 쿠키 삭제
      res.cookie("accessToken", null, { maxAge: 0 });

      res.status(200).json({ message: "successfully deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server error" });
    }
  },
};
