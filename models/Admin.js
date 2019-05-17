const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({
    email:{
     type:String,
     required: true
    },
    password:{
     type: String,
     required:true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    }
    
})
adminSchema.index({
    firstName: 'text',
    middleName:'text',
    lastName:'text',
    email:'text',
  });
module.exports = Admin = mongoose.model('admins', adminSchema)