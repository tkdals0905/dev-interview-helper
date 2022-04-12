const express = require("express");
const router = express.Router();
const { card, like, dislike } = require("../controller/card");

// 카드 생성
router.post("/", card);
// 좋아요 선택
router.patch("/:cardId/like", like);
// 좋아요 삭제
router.delete("/:cardId/like", dislike);

module.exports = router;
