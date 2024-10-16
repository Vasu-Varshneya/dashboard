var mongoose = require("mongoose")

const func =()=>{
    mongoose.connect("mongodb+srv://vasuvarshney26:vasu28@cluster0.1azvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected")
}
func();
const DataSchema =new mongoose.Schema({
    x:Number,
    y:Number,
    r:Number
})
module.exports = mongoose.model('datamodel',DataSchema)
