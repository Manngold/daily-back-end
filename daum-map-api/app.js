import express from "express";
import latitude from "latitude";

const app = express();
const PORT = 3000;
const APP_KEY = "6651e6add2bfc2a9c421519fbd190944";
let lat, lng;

const financial = unfixed => Number.parseFloat(unfixed).toFixed(5);

latitude().then(location => {
  lat = financial(location.latitude);
  lng = financial(location.longitude);
});

app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", { lat, lng, APP_KEY });
  console.log(lat, lng);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
