const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchemat=new Schema({
    username:String,
    twitterId:String,
    thumbnail:String
});

const Usert=mongoose.model('usert',userSchemat);
module.exports=Usert;