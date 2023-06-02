const mongoose = require('mongoose')
const bcrpt = require('bcrypt')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required : true ,
    },
    phone:{
        type:String,
        required : true ,
    },
    email:{
        type:String,
        required : true ,
    },
    password:{
        type:String,
        required : true ,
    },
    cPassword:{
        type:String,
        required : true ,
    }
}, {timestamps:true})

schema.pre('save' , async function(next){
    if(this.isModified('password' && "cPassword")){
        this.password = await bcrpt.hash(this.password , 10)
        this.cPassword = await bcrpt.hash(this.cPassword , 10)
    }
})

const model = new mongoose.model("mangal-own-website", schema)
module.exports = {model}