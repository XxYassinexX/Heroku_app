import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: String,
  img: String,
});
const User = mongoose.model("User", userSchema);

export default User;
