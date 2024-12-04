const mongoose = require('mongoose')
const { type } = require('os')

const sinupschema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},


})

module.exports = mongoose.model('user',sinupschema)