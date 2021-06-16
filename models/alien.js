const mongoose = require('mongoose')

//this is called to mongoose or mongodb that I want the  database with this structure 
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})
module.exports = mongoose.model('Alien', alienSchema)