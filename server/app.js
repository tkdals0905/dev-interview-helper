const express = require("express");
const app = express();
const PORT = 4000;
const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(PORT, () => {
  console.log("Server listen PORT 4000");
});
