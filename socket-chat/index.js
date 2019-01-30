import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const PORT = 3000;

http.Server(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
