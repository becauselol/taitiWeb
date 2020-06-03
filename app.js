const express = require("express");
const pug = require("pug");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(3000)
const io = require("socket.io")(server);
