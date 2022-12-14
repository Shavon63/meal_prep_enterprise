const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ketoSchema= new Schema(
    {
        day: {type: String, required: true},
        breakfast: {type: String, enum: ['Egg Avacado Sandwhich','Over Night Oats & blueberries','Peanut Butter Banana Smoothie','Blueberry Banana Acai Bowl'], required: true},
        lunch: {type: String, default: 'fiber bar'},
        dinner: {type: String, enum: ['Bake Chicken & Brussels', 'Steamed Fish & Asparagus', 'Pepper Steak & Broccoli', 'Smoked Snapper & Veggie Mix', 'Grilled Chicken & Veggie Mix'], required: true },
        image: {type: String, default: 'https://i.imgur.com/dDou1Jv.jpg'},
        images: {type: String, default: 'https://i.imgur.com/S4P0zBF.jpg'},
        img: {type: String, default: 'https://i.imgur.com/I3G6vj9.jpg'}
    }
) 

// create the keto schema model
const Keto = mongoose.model('Keto', ketoSchema)

//export the  schema 
module.exports= Keto 