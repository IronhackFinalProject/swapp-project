const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema(
  {
    publishedBy: { type: Schema.Types.ObjectId, ref: "User" },
    publishedName: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    interests: { type: String },
    picture: { type: String },
  },
  { timestamps: true }
);

const Favorite = model("Favorite", favoritesSchema);

module.exports = Favorite;
