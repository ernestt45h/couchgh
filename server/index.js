const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect("mongodb://localhost:27017/chochgh")


const Trips = require('./routes/trips')
const User = require('./routes/user')

app.use(bodyParser.json())

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use('/trips', Trips)
app.use('/user', User)

app.listen(8081,()=>{
    console.log('listenning on port 8080')
})