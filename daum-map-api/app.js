import express from "express";
import latitude from "latitude";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
