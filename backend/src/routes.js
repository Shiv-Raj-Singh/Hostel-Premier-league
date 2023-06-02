const express = require("express")
const router = express.Router()
const {model} = require("./model.js")
const bcrypt = require('bcrypt')

router.post("/register" , async (req,res)=>{
    try {
        console.log(req.body)
        if(req.body.password !== req.body.cPassword){
            // alert('Password Mis-Match')
            return res.redirect('./REGISTER.html')
        } 
        const data = await model.create(req.body)
        console.log(data);
        res.redirect("LOGIN.html")
        // res.send("Hii welcome mangal website ")
        // res.render('../public/index')   
    } catch (error) {
        if(error) res.send(error.message)
    }    
})

router.post("/login" , async (req,res)=>{
    try {        
    console.log(req.body)
    // if(req.body.password !== req.body.cPassword) return res.redirect('./LOGIN.html')
    const data = await model.findOne({phone : req.body.email})
    if(!data) return res.redirect('./LOGIN.html')
    console.log(await bcrypt.compare(data.password , req.body.password));
    if( await !bcrypt.compare(data.password , req.body.password)) return res.redirect('./register.html')
    
    res.redirect("index.html")
    // res.send("Hii welcome mangal website ")
    // res.render('../public/index')
    } catch (error) {
        if(error) res.send(error.message)
    }
})

module.exports = router