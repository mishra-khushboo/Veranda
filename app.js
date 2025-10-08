const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Veranda";
main()
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
app.get("/", (req, res) => {
  res.send("i am root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "mishra niwas",
    description: "my new home",
    price: 1200,
    location: "Goa",
    country: "india",
  });
  await sampleListing.save();
  console.log("saved");
  res.send("success");
});
app.listen(8080, () => {
  console.log("server is running");
});
