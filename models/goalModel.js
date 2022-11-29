const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'user'
        },
text:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
    
},{timestamps:true});



const Goal = mongoose.model('goal', goalSchema);

module.exports = Goal

