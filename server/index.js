require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
  })
);

const { PORT } = process.env;

app.get('/', (req, res, next) => {
    res.send('<h1>It works!</h1>')
});





app.listen(PORT || 4000, () => {
    console.log(`Listening for request on ${PORT}`)
});