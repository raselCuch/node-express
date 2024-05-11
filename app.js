const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("page principal");
});

app.get("/hola-mundo", (req, res) => {
  res.send("page hola mundo");
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
