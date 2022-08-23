const express = require("express");
const { create } = require("express-handlebars");
const products = require("./db-imitation/prodcts.json");

const app = express();

const hbs = create({
    extname: "hbs",
});

app.use(express.static("public"));

app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/products", (req, res) => {
    res.render("product", {
        products,
        cssFileName: "products",
    });
});

app.listen(4444, () => {
    console.log(`Application server is running on port ${4444}`);
});
