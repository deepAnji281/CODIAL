const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        require:true
    },
    
})
const user=mongoose.model('user',userSchema);
module.exports=user;