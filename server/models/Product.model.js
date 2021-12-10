const { Schema, model } = require("mongoose");

const productSchema = new Schema(
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

const Product = model("Product", productSchema);

module.exports = Product;
