const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true       
    },
    mobile:{
        type:String,
        required: true,
        unique: true
    },
    photo:{
        type:String
    }
},{
    timestamps:true,
})
module.exports = mongoose.model("Contact",contactSchema);