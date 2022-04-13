const express = require('express');
const router = express.Router();
const {
  card,
  shareCard,
  unShareCard,
  like,
  dislike,
  deleteCard,
} = require('../controller/card');

router.post('/', card);

router.patch('/:cardId/share', shareCard);
router.delete('/:cardId/share', unShareCard);

// 좋아요 선택
router.patch('/:cardId/like', like);
// 좋아요 삭제
router.delete('/:cardId/like', dislike);

router.delete('/:cardId', deleteCard);
module.exports = router;
