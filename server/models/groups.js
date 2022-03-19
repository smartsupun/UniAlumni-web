import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: { type: String },
  name: { type: String, required:  true },
  year: { type: String, required: true },
  groupname: { type: String, required: true },
  groupemail:{type: String, required:  true},
  groupphone:{type: String, required:  true},
  contactpersonname:{type: String, required:  true},
  contactpersonphone:{type: String, required:  true},
  contactpersonemail:{type: String, required:  true},
  admin:{type: String, required:  true}
});

export default mongoose.model("Groups", userSchema);