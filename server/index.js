require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

app.use(cors("*"));

const { PORT } = process.env;

app.get("/", (req, res, next) => {
  if (req.session.user) {
    res.status(200);
  } else {
    res.status(401).send("Not Allowed");
  }
});

app.listen(PORT, () => {
  console.log(`Listening for request on ${PORT}`);
});
