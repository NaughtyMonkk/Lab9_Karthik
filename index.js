const express = require("express"),
  app = express(),
  homeController = require("./controllers/homecontroller_ksiva1");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);


app.get("/home", homeController.respondWithHome);
app.get("/images/:image", homeController.respondWithImage);

app.listen(app.get("port"), () => {
  console.log(`Server is listening on port : ${app.get("port")}`);
});