const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars",
    require("express-handlebars")({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });