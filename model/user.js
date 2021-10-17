const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  course :{type:String,default:null},
  profile_image:{ type:String,default:null},
  resume:{type:String,default:null},
  campus_name:{type:String,default:null},
  year: { type: Number, default:null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
 
});

module.exports = mongoose.model("user", userSchema);