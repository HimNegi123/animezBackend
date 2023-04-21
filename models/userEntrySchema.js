const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const log=console.log;
const jwt=require("jsonwebtoken");
require("dotenv").config();
// login and SignIn Schema

//Schema
const Schema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true
},
// tokens:[{
//     token:{
// type:String,
// require:true
//     }
// }]    
});

//Middleware
Schema.methods.generateToken= async function(){
try{
    log(this._id);
    const token= await jwt.sign({_id:this._id.toString()},process.env.SECRET_KET);
    return token;
}catch(e){
    log(e);
}
}

Schema.pre("save",async function(next){
try{
   this.password= await bcrypt.hash(this.password,10);
   log(`User hash password ${this.password}`);
   next();
}catch(e){
    log('Error in hashing-password generation');
}
});

//Model
const UserEntry=mongoose.model("userEntry",Schema);
module.exports=UserEntry;