var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://vasuvarshney26:vasu28@cluster0.1azvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/")
const DataSchema =new mongoose.Schema({
    x:Number,
    y:Number,
    r:Number
})
module.exports = mongoose.model('datamodel',DataSchema)