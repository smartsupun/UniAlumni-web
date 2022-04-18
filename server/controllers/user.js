import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";
import RequestModal from "../models/request.js";
import GroupModel from "../models/groups.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, university, school, olyear, alyear, graduatedyear } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, university, school, alyear, olyear, graduatedyear });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

// send join request to request modal

export const joinrequest = async (req, res) => {
  const { userid, groupid,username,useruni } = req.body;
  
  try {

    const user = await UserModal.findOne({ _id:userid });
    console.log("user id:",user)

    let groupexist

    if (user._id) {
      for (let i = 0; i < user.groups.length; i++) {

        if (user.groups[i].groupId.toString() == groupid) {
          res.status(500).json({ message: "You are in the group" });

        }
        else {

          groupexist = false;
        }

      }
      if (!groupexist) {
        const request = await RequestModal.findOne({ userid, groupid });

        if (!request) {

          const result = await RequestModal.create({ userid, groupid,username,useruni });

        }

      }

    }
    else {
      res.status(500).json({ message: "User not Exist" });
    }
  } catch (error) {
    console.log(error)
  }
}


export const userrequest = async (req, res) => {
  const {groupid} = req.body;
  // console.log("hellooo",groupid);

  try {
    const joinRequest = await RequestModal.find({groupid:groupid,confirm:false});  
    // console.log("test",joinRequest);

    res.status(200).json({joinRequest});

} catch (error) {
    res.status(404).json({ message: error.message });
}

};



export const requeststatus = async (req, res) => {
  const {groupid,userid} = req.body;
  
  try { 
    
    const userreqid = await UserModal.findOne({_id:userid  });
    // console.log("this is user id:",userreqid._id.toString())
    
    if(userid){
      console.log("if read:",userid)
      // await UserModel.findByIdAndUpdate(admin,{ groups: result._id});      
      let userequest = await RequestModal.updateOne({userid,groupid},{ $set: {confirm:true} });      
      // console.log("if read this:",userequest)
      
      
      const request = await GroupModel.findOne({_id:groupid});
      console.log("group name:",userid)
      
      
      let useradd = await UserModal.updateOne({_id:userid},{ $addToSet: { groups: [{groupId:groupid,groupName:request.groupname}]} });      
      console.log("if read this:",useradd)
      
      
      res.send({useradd});

    }
    else{
      console.log("else read")
      // res.send({result});
    }

} catch (error) {
  console.log(error)

    res.status(404).json({ message: error.message });
}

};



export const requeststatusreject = async (req, res) => {
  const {groupid,userid} = req.body;
  
  try { 
    
    const userreqid = await UserModal.findOne({_id:userid  });
    // console.log("this is user id:",userreqid._id.toString())
    
    if(userid){
      console.log("if read:",userid)
      // await UserModel.findByIdAndUpdate(admin,{ groups: result._id});      
      let userequest = await RequestModal.updateOne({userid,groupid},{ $set: {confirm:true} });      
      // console.log("if read this:",userequest)
      
      res.send({userequest});

    }
    else{
      console.log("else read")
      // res.send({result});
    }

} catch (error) {
  console.log(error)

    res.status(404).json({ message: error.message });
}

};
