const express = require("express");
const dotenv = require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = express();
const seedDB = require("./seed");
const dataRoute = require("./apiRoutes/dataRoute");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("IT'S ALIVE");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

// seedDB();

app.use(dataRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening at PORT: ", PORT);
});
