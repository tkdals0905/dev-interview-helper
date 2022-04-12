const { Card, User } = require('../models');
const { isAuth } = require('./auth');
module.exports = {
  cards: async (req, res, next) => {
    try {
      const cards = await Card.findAll({
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'question', 'answer'],
        include: [
          {
            model: User,
            as: 'Likers',
            attributes: ['id'],
          },
          {
            model: User,
            attributes: ['id', 'username'],
          },
        ],
      });
      return res.status(200).json(cards);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  sharedCards: async (req, res, next) => {
    const userInfo = await isAuth(req, res);
    if (!userInfo) {
      return res.status(400).json({ message: '로그인 하셔야합니다.' });
    }
    const card = await User.findOne({
      where: {
        id: userInfo.dataValues.id,
      },
      attributes: ['id', 'username', 'email'],
      include: [
        {
          model: Card,
          as: 'Shared',
          attributes: ['id', 'question', 'answer'],
          include: [
            {
              model: User,
              as: 'Likers',
              attributes: ['id'],
            },
            {
              model: User,
              attributes: ['id', 'username'],
            },
          ],
        },
      ],
    });
    return res.status(200).json(card);
  },
};
