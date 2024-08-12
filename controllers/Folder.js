
const Folder = require('../models/Folder');

exports.addFolder=async (req,res)=>{
    try{
      const { name, parent } = req.body;
      const folder = new Folder({ name, parent, user: req.user._id });
      await folder.save();
     return res.status(200).json({
      message:"Folder Created Successfulyt",
      folder
     }
    );
    }catch{
console.log("Error",error);
return res.status(500).json({
  message:"Unexpected Error",

})
    }
}

exports.listFolder=async (req,res)=>{
  try{
    const id=req.user._id;
    console.log("Folder user id is",id);
    const folders = await Folder.find({ id}).populate('parent');
    return res.status(200).json({
      message:"Folder Fetched Sucessfully",
      folders
    })
  }
  catch(error){
    console.log(error)
return res.status(500).json({
  message:"Unexpected Eror"
})
  }
}