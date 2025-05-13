const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
   {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    phoneNumber:{
      type:String,
      maxLength:200
    },
    gender: {
      type: String,
    },
}
);

module.exports = mongoose.model("User", userSchema);