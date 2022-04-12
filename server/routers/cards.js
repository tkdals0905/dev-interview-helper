const express = require('express');
const router = express.Router();
const { cards, sharedCards } = require('../controller/cards');

// 카드 조회
router.get('/', cards);
router.get('/shared', sharedCards);
module.exports = router;
