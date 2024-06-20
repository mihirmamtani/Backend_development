import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type :String,
        required : true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        
    }
})

export const user = mongoose.model('User',userSchema);