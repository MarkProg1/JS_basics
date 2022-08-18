// const Joi = require("joi");

// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate("qweqwe"));

const express = require("express");

const app = express();

app.use("*", (req, res) => {
    res.send("<h1>ну это мой h1 тебе в ответ.</h1>");
});

const listener = app.listen(4444, () => {
    console.log(`Сервер запушен на порте ${listener.address().port}`);
});
