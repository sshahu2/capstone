const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
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
 
});

const User=mongoose.model('userk',userSchema);
module.exports=User;