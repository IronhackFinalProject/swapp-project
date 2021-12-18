const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: [true, "Username is required"] },
    name: { type: String, required: [true, "Name is required"] },
    lastname: { type: String, required: [true, "Lastname is required"] },
    city: { type: String, required: [true, "City is required"] },
    password: { type: String, required: [true, "Password is required"] },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    favoritos: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
