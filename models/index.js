// dependencies
const mongoose = require('mongoose')
require('dotenv').config()


// connect to MongoDB via mongoose 
const connectionString = process.env.MONGODBURI

mongoose.connect(
    connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true}
)

// console.log() connection statuses 
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString)
})
mongoose.connection.on('disconnected', () => {
    console.log('mongoose discconnected to ', connectionString)
})
mongoose.connection.on('error', (error) =>{
    console.log('mongoose error', error)
})

//access models
module.exports.Detox = require("./detox.js")
module.exports.Keto = require('./keto.js')