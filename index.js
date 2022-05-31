const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const ejs = require('ejs')
var Schema = mongoose.Schema
var url = "mongodb://localhost:27017/Application"
mongoose.connect(url, {useNewUrlParser:true})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

var patientSchema = new mongoose.Schema({
    checked: Boolean,
    fname: String,
    lname: String,
    Signature: Image
})

var patient = mongoose.model("Patient", patientSchema)

app.get('/', function(req, res){
    res.render('box')
})

/*app.post('/box', function(req, res){
    var patientDetails = req.body
    if(!patientDetails.Boolean || !patientDetails.fname || !patientDetails.lname || patientDetails.Image){
        res.send('invalid! Check fields')
    }
    else{
        newPatient = new Patient({
            checked: patientDetails.Boolean
            name: patientDetails.String
            name: patientDetails.String
            Signature: patientDetails.Image
        })
    }

    newPatient.save(function(error, Patient){
        if(error){
            res.send('System Error')
        }
        else{
            res.send('success')
        }
    })
})*/

app.listen(3000)
console.log('Express server running on port 3000')
