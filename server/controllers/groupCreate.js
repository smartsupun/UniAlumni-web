
import UserModal from "../models/groups.js";

export const groupauth = async (req, res) => {
  const { name, year, groupname, groupemail,groupphone,contactpersonname,contactpersonphone,contactpersonemail} = req.body;

  try {
  

    const result = await UserModal.create({ name, year, groupname,groupemail,groupphone,contactpersonname,contactpersonphone,contactpersonemail});
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
