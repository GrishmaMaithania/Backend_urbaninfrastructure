const express=require("express")
const router=express.Router();
const input=require("../Model/input")

router.post("/",async(req,res)=>{
    const inputData=new input({
        email:req.body.email,
        observation:req.body.observation
    })
    await inputData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the data")
    })
})
module.exports=router;