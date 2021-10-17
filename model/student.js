const mongoose = require("mongoose");

// student details

const studentSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  course :{type:String,default:null},
  profile_image:{ type:String,default:null},
  resume:{type:String,default:null},
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  
});

module.exports = mongoose.model("student", studentSchema);