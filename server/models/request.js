import mongoose from "mongoose";

const requestSchema = mongoose.Schema({

  
   groupid: {type:String},
   userid: {type:String},
   username: {type:String},
   useruni: {type:String},
   confirm:{
     type:Boolean,
     default:false,
   },
   notify:{
    type:Boolean,
    default:false,
  }
  
});

export default mongoose.model("Request", requestSchema);