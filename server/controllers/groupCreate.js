
import GroupModel from "../models/groups.js";
import UserModel from "../models/user.js";

export const groupauth = async (req, res) => { 
 
  const { name, year, groupname, groupemail,groupphone,contactpersonname,contactpersonphone,contactpersonemail,admin} = req.body;

  try { 
    const result = await GroupModel.create({ name, year, groupname,groupemail,groupphone,contactpersonname,contactpersonphone,contactpersonemail,admin});
    
    if(result._id){
      console.log("if read")
      // await UserModel.findByIdAndUpdate(admin,{ groups: result._id});      
      let useradd = await UserModel.updateOne({_id:admin},{ $addToSet: { groups: [{groupId:result._id,groupName:result.groupname}]} });      
      res.send({result});

    }
    else{
      console.log("else read")
      res.send({result});
    }
    
    // res.status(201).json({ result });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }


};
