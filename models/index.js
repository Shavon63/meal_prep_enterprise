// dependencies
const mongoose = require('mongoose')


// connect to MongoDB via mongoose 
const connectionString = 'mongodb://localhost:27017/meals-prep-enterprise'
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
module.exports.WeightLoss = require('./weight_loss.js')