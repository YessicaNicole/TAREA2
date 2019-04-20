const mongoose = require("mongoose");
mongoose.connect("mongodb://172.19.0.2:27017/user");
module.exports=mongoose;
