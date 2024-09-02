const mongoose=require("mongoose")
const inputSchema=new mongoose.Schema({
    email:String,
    observation:String
  
})
module.exports=mongoose.model("Input",inputSchema)
