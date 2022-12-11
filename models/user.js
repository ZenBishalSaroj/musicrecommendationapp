import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name: {
        type:String,
        required: [true,'Please provide a username'],
        minlength:3,
        maxlength:20,
        trim:true,
        unique:true,
    },
    password: {
        type:String,
        required: [true,'Please provide a password'],
        minlength:2,
    }
})
export default mongoose.model('User',UserSchema)