import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const server = http.Server(app);
const ioServer = io(server);

server.listen(3000);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

ioServer.on("connection", socket => {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", data => {
    console.log(data);
  });
});
