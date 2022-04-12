const express = require('express');
const router = express.Router();
const { card, shareCard, unShareCard } = require('../controller/card');

router.post('/', card);
router.patch('/:cardId/share', shareCard);
router.delete('/:cardId/share', unShareCard);
module.exports = router;
