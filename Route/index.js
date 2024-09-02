const express=require("express")
const router=express.Router();
const inputRoute=require("./inputRoute")

router.get("/",(req,res)=>{
    res.send("this is backend")
})
router.use('/input',inputRoute);
module.exports=router;