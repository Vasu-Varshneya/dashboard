

var mongoose = require("mongoose")
const func =()=>{
    mongoose.connect("mongodb+srv://vasuvarshney26:vasu28@cluster0.1azvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected")
}
func();
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
