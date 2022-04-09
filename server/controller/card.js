const { Card, User } = require("../models");
const userAuth = require("./auth");

module.exports = {
  card: async (req, res, next) => {
    try {
      // 로그인인증.. 이게 맞는지 모르겠다...
      const userInfo = await userAuth(req, res);
      const newCard = await Card.create({
        question: req.body.question,
        answer: req.body.answer,
        // userId: req.user.id,
      });

      const fullCard = await Card.findOne({
        where: {
          id: newCard.id,
        },
        attributes: ["question", "answer"],
        include: [
          {
            model: User,
            as: "Likers",
            attributes: ["id"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
      });
      return res.status(201).json(fullCard);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
