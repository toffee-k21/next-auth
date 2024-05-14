const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true,"please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
forgotPasswordToken:String,
forgotPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry:Date,
});

const User = new mongoose.model("user",userSchema);

export default User