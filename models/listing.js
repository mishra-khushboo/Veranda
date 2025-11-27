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
  },
  price: Number,
  location: String,
  country: String,
});

listingSchema.pre("save", function (next) {
  if (!this.image || this.image.trim() === "") {
    this.image =
      "https://c8.alamy.com/comp/R6FJT1/village-house-kerala-india-R6FJT1.jpg";
  }
  next();
});

module.exports = mongoose.model("Listing", listingSchema);
