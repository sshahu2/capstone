const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema;
const conn=require('./user-direct');
const adminSchema=new Schema({
    name:{
        type:String,
    },
     email:{
        type:String,
        required:true
    },
     username:{
        type:String,
        required:true
    },
     password:{
       type:String,
        required:true
    },
});

const Admin=mongoose.model('admin',adminSchema);
module.exports=Admin;
module.exports.getUserById=function(id,callback){
    Admin.findById(id,callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  Admin.findOne(query, callback);
}
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) {
                console.log("not done");
            }
            else{
            newUser.password=hash;
            newUser.save(callback);}
        });
    });

}
module.exports.comparePassword=function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) {
                console.log("not done");
            }
        callback(null,isMatch);
    });
}

