const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const route = require('./routes')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"))

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://bloggingSite:project123@project-01-group-3.2zpxn0w.mongodb.net/Hoster-Premier-league', {
useNewUrlParser : true
}).then(()=>{console.log('connected successfully');})
.catch((err)=>{console.log(err.message);})

app.use("/" , route)

app.listen(3001 , ()=>{ 
    console.log(`app is Running on 3000`)
})