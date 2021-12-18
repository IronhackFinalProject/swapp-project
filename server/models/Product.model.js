const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    publishedBy: { type: Schema.Types.ObjectId, ref: "User" },
    publishedName: { type: String },
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    category: { type: String },
    interests: { type: String },
    picture: { type: String },
    condition: { type: String },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
