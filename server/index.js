require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const Joi = require("joi");

function formatJoiErrorMessage(str) {
  let message = str.replace(/"/gi, '');
  let type = message.split(" ")[0];
  return {
    message,
    type
  };
}

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    secure: false,
    cookie: { maxAge: 60000 }
  })
);

app.use(express.json());

app.use(cors("*"));

const { PORT } = process.env;

app.get("/", (req, res, next) => {
  if (req.session.user) {
    res.status(200);
  } else {
    res.status(401).send("Not Allowed");
  }
});

app.post(
  "/register",
  (req, res, next) => {
    let data = req.body;

    const schema = Joi.object().keys({
      username: Joi.string()
        .required()
        .min(5)
        .max(20),
      password: Joi.string()
        .min(7)
        .max(20)
    });

    Joi.validate(data, schema, (err, value) => {
      if (err) {
        res.status(400).send(formatJoiErrorMessage(err.details[0].message));
      } else {
        res.status(200).send(value);
      }
    });
  },
  (req, res) => {
    //TODO: persist in Db
    const newUser = req.body;
    req.session.user = newUser;
    console.log(req.session);
    req.session.save();
    res.sendStatus(200);
  }
);

app.listen(PORT, () => {
  console.log(`Listening for request on ${PORT}`);
});
