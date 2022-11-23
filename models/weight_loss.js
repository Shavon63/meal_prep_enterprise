const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const weightLossSchema= new Schema(
    {
        day: {type: String, required: true},
        morning: {type: String, enum: ['Egg Avacado Sandwhich','Over Night Oats & blueberries','Peanut Butter Banana Smoothie','Blueberry Banana Acai Bowl'], required: true},
        lunch: {type: String, default: 'fiber bar'},
        dinner: {type: String, enum: ['Bake Chicken & Brussels', 'Steamed Fish & Asparagus', 'Pepper Steak & Broccoli', 'Smoked Snapper & Veggie Mix', 'Grilled Chicken & Veggie Mix'], required: true },
        image: {type: String, default: 'https://i.imgur.com/k0scR9s.jpg'}
    }
) 

// create the WeightLoss schema model
const WeightLoss = mongoose.model('WeightLoss', weightLossSchema)

//export the  schema 
module.exports= WeightLoss 