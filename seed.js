const Data = require("./models/Data");

const seedDB = async function () {
  try {
    await Data.insertMany(data);
    console.log("data seeded successfully", data.length);
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedDB;
