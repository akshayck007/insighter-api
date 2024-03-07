const express = require("express");
const Data = require("../models/Data");
const router = express.Router();

router.get("/api/getdata", async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
});

module.exports = router;
