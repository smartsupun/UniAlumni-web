import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  school:{type: String, required:  true},
  olyear:{type: String, required:  true},
  alyear:{type: String, required:  true},
  university:{type: String, required:  true},
  graduatedyear:{type: String, required:  true},
});

export default mongoose.model("User", userSchema);