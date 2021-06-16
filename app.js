const express = require('express')
const mongoose = require('mongoose')
const app = express()

//coonect with database
const url = 'mongodb://localhost/Aliendb'
mongoose.connect(url, {
    useNewUrlParser: true
})
const con = mongoose.connection
    //I want to print that when node.js and express connected with database successfully then print connected
con.on('open', function() {
    console.log('connected')
})

//for reading json format ,this need before aliens file
app.use(express.json())

//when I get an request /alien then it send this request  to the aliens.js
const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter)


app.listen(4000, function() {
    console.log('Server Started')
})