const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
name:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
email:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"],
        unique: true
    } ,
password:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [8, "{PATH} must be atleast 8 characters long"]
    } ,
    
},{timestamps:true});



const User = mongoose.model('user', userSchema);

module.exports = User