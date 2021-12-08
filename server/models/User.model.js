const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String },
    lastname: { type: String },
    password: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    favoritos: [{ type: Schema.Types.ObjectId, ref: "Favoritos" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
