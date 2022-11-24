// dependencies of what we need to make this code work with the whole
const mongoose = require('mongoose')
const Schema = mongoose.Schema 

//creating the schema for detox 
const detoxSchema = new Schema(
    {
        name: {type:String, required: true},
        breakfast: {type: String , enum: ['Strawberry Smoothie', 'Coconut Papaya Smoothie', 'Blackberry Apple Acai Bowl', 'Blackberry Grape Smoothie','Apple Bannana Smoothie'], required: true},
        morningTea: {type: String, required: true },
        lunch: {type: String, enum: ['4 oz Pstachios'], required: true},
        dinner: {type: String, enum: ['Curry Chickpeas & Wildrice w Salad', 'Steamed veggies & Wildrice Cocunut Sauce', 'Steamed Zucchini, Pumpkin, Tommatos, Onions, Bellpeppers', 'Lentil Veggie Soup'], required: true},
        afternoonTea: {type: String, default: 'Ashwaganda'},
        nightimePills: {type: String, default: 'Detox Blend'},
        image: {type: String, default: 'https://i.imgur.com/KZSpwFp.jpg'},
        images: {type: String, default: 'https://i.imgur.com/KZSpwFp.jpg'},
        img: {type: String, default: 'https://i.imgur.com/KZSpwFp.jpg'}
        
    }
)

//creating the actual detox schema 
const Detox = mongoose.model('Detox', detoxSchema)

//export this created Detox schema to make it useable in other files & folders
module.exports = Detox ;