const express = require("express");
const router = express.Router();
const { cards } = require("../controller/cards");
const { card } = require("../controller/card");

// 카드 조회
router.get("/", cards);
// 카드 생성
router.post("/", card);
module.exports = router;
