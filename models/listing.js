const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://c8.alamy.com/comp/R6FJT1/village-house-kerala-india-R6FJT1.jpg",
    set: (v) =>
      v === ""
        ? "https://c8.alamy.com/comp/R6FJT1/village-house-kerala-india-R6FJT1.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
