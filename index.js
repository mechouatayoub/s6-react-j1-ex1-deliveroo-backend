const express = require("express");
const cors = require("cors");
const formidable = require("express-formidable");
const data = require("./data");

const app = express();
app.use(cors());
app.use(formidable());

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "Page not found" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
