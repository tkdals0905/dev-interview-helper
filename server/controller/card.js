const { Card, User } = require("../models");
const { auth } = require("./auth");

module.exports = {
  card: async (req, res, next) => {
    try {
      // 로그인인증.. 이게 맞는지 모르겠다...
      // const userInfo = await auth(req, res);
      // if (!userInfo) {
      //   return res.status(400).json({ message: "로그인 하셔야합니다." });
      // }

      const newCard = await Card.create({
        question: req.body.question,
        answer: req.body.answer,
        UserId: req.body.userId,
      });

      const fullCard = await Card.findOne({
        where: {
          id: newCard.dataValues.id,
        },
        attributes: ["id", "question", "answer"],
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

  like: async (req, res, next) => {
    try {
      const like = await Card.findOne({
        where: {
          id: req.param.cardId,
        },
      });
      if (!like) {
        return res.status(403).send("좋아요가 존재하지 않습니다.");
      }
      await like.addLikers(req.user.id);
      return res.status(200).json({
        CardId: Number(req.params.cardId),
        UserId: Number(req.user.id),
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  dislike: async (req, res, next) => {
    // console.log(req.params);
    try {
      const dislike = await Card.findOne({
        where: {
          id: req.params.cardId,
        },
      });
      if (!dislike) {
        return res.status(403).send("싫어요가 존재하지 않습니다.");
      }
      await dislike.removeLikers(req.user.id);
      return res.status(200).json({
        CardId: Number(req.params.cardId),
        UserId: Number(req.user.id),
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
