const express = require('express');
const router = express.Router();
const { card } = require('../controller/card');

router.post('/', card);

module.exports = router;
