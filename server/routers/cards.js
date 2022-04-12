const express = require('express');
const router = express.Router();
const { cards, sharedCards, myCards } = require('../controller/cards');

// 카드 조회
router.get('/', cards);
router.get('/shared', sharedCards);
router.get('/myCards', myCards);
module.exports = router;
