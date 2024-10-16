var mongoose = require("mongoose")

const uri = "mongodb+srv://vasuvarshney26:vasu28@cluster0.1azvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));
const DataSchema =new mongoose.Schema({
    x:Number,
    y:Number,
    r:Number
})
module.exports = mongoose.model('datamodel',DataSchema)
