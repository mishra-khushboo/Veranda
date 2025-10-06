const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  price: Number,
  location: string,
  country: string,
});

const Listing = mongoose.model("Listing", listingSchema);
modules.export = Listing;
