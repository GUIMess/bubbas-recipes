const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  cloudinaryId: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // profileSong: {
  //   type: String,
  //   require: true,
  // },
  // songCloudinaryId: {
  //   type: String,
  //   require: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);