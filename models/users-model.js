const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema(
  {
    username: String,
    name: String,
    email: String,
    city: String,
    country: String,
    about: String,
    instagram: String,
    twitter: String,
    fb: String,
    website: String,
  },
  
  {
    timestamps: true,
    //modfied date
  }
);

// singular capitalized name for the mongo collection - Photo
module.exports = mongoose.model("Users", UsersSchema);