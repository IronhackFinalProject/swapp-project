const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    interests: { type: String },
    picture: { type: String },
  },
  { timestamps: true }
);

const Favorite = model("Favorites", favoritesSchema);

module.exports = Favorite;
