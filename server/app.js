const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const db = require("./models");

const signupPage = require("./router/signupPage");
const loginPage = require("./router/loginPage");
// const logoutPage = require("./router/logoutPage");
// const mainPage = require("./router/mainPage");
// const mypagePage = require("./router/mypagePage");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.use(cors({}));

// json형식으로 올 경우 body 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/signup", signupPage);
app.use("/login", loginPage);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

//app.use("/logout", logoutPage);
// app.use("/main", mainPage);
// app.use("/mypage", mypagePage);

// 일단 마지막에 위치 (이유 찾아보기)
app.listen(PORT, () => {
  console.log(`Server listen PORT ${port}`);
});
