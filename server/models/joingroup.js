import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  school:{type: String, required:  true},
  olevel:{type: String, required:  true},
  alevel:{type: String, required:  true},
  university:{type: String, required:  true},
  batch:{type: String, required:  true},
 
});

export default mongoose.model("joingroup", userSchema);