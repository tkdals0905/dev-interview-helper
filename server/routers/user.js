const express = require('express');
const router = express.Router();
const { signup, login, logout } = require('../controller/user');
const { auth } = require('../controller/auth');

//회원가입
router.post('/', signup);
//로그인
router.post('/login', login);
//로그아웃
router.get('/logout', logout);
//토근 인증
router.get('/token', auth);

module.exports = router;
