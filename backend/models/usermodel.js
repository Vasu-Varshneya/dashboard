

var mongoose = require("mongoose")
const uri = "mongodb+srv://vasuvarshney26:vasu28@cluster0.1azvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));
const UserSchema = new mongoose.Schema({
    Name :{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        length:8
    }
})
module.exports = mongoose.model('usermodel',UserSchema)
