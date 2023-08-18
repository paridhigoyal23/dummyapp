const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/dummyapp"));

app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(80, () => {
  console.log("Server started!");
});
