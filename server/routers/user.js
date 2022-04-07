const express = require('express');
const router = express.Router();
const { signup, login } = require('../controller/user');

//회원가입
router.post('/', signup);
//로그인
router.post('/login', login);

module.exports = router;
