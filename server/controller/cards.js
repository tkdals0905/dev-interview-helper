const { Card, User } = require('../models');

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
};
