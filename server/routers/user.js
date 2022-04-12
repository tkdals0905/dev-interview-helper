const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  logout,
  editUsername,
  signout,
} = require('../controller/user');
const { auth } = require('../controller/auth');

//회원가입
router.post('/', signup);
//로그인
router.post('/login', login);
//로그아웃
router.get('/logout', logout);
//토근 인증
router.get('/token', auth);
// 회원정보 수정 (아메일)
router.patch('/username', editUsername);
// 회원탈퇴
router.delete('/delete', signout);

module.exports = router;
