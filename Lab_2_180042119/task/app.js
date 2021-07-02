const express = require("express");
const cors = require("cors");
var LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const userRoutes = require("./routes/userRoutes.routes");

const app = express();
app.use(express.json({ extende: false }));
app.use(cors());
app.use(express.static("public"));
app.use(userRoutes);

app.get("/", (req, res) => {
  localStorage.removeItem("name");
  res.sendFile("register.html", { root: "./views/pages/examples" });
});

app.use((req, res) => {
  res.status(401).sendFile("404.html", { root: "./views/pages/examples" });
});

module.exports = app;
