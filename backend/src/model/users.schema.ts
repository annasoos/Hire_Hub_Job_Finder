import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

// we define the Mongoose Schema , which determines the shape of our MongoDB documents

export const User = mongoose.model("user", UserSchema);