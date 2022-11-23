// give database variable
const db = require('./')

const detoxRegiment = [
    
        {
            day: 'Monday',
            breakfast:'Strawberry Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Curry Chickpeas & Wildrice w Salad',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/lxfqsjy.jpg', 'https://i.imgur.com/QtUWien.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
        },
        {
            day: 'Tuesday',
            breakfast: 'Coconut Papaya Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed veggies & Wildrice Cocunut Sauce',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/9qeZ8dH.jpg', 'https://i.imgur.com/FLEtWDL.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
        }, 
        {
            day: 'Wednesday',
            breakfast: 'Blackberry Apple Acai Bowl',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed Zucchini, Pumpkin, Tommatos, Onions, Bellpeppers',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/xao4CzF.jpg', 'https://i.imgur.com/nxx8URk.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
        }, 
        {
            day: 'Thursday',
            breakfast: 'Blackberry Grape Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Curry Chickpeas & Wildrice w Salad',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/NHwqNM4.jpg', 'https://i.imgur.com/QtUWien.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
        }, 
        {
            day: 'Friday',
            breakfast: 'Apple Bannana Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: "Lentil Veggie Soup",
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/0UCkBQQ.jpg', 'https://i.imgur.com/a6gHr8E.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
            
        }, 
        {
            day: 'Saturday',
            breakfast: 'Coconut Papaya Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed Zucchini, Pumpkin, Tommatos, Onions, Bellpeppers',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/9qeZ8dH.jpg', 'https://i.imgur.com/nxx8URk.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"

        },
        {
            day: 'Sunday',
            breakfast: 'Blackberry Apple Acai Bowl',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed veggies & Wildrice Cocunut Sauce',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: "'https://i.imgur.com/xao4CzF.jpg', 'https://i.imgur.com/FLEtWDL.jpg', 'https://i.imgur.com/UkTmDdl.jpg'"
    }
        
    
]

const weight_loss_seed = [
    {
        day: 'Monday',
        morning: 'Egg Avacado Sandwhich',
        lunch: 'fiber bar',
        dinner: 'Bake Chicken & Brussels',
        image: "'https://i.imgur.com/jlX5juV.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/6XRA0U2.jpg'"
    },  {
        day: 'Tuesday',
        morning: 'Over Night Oats & blueberries',
        lunch: 'fiber bar',
        dinner: 'Steamed Fish & Asparagus',
        image: "'https://i.imgur.com/KBFKwi8.jpg','https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/LoEvbXj.jpg'",
    },  {
        day: 'Wednesday',
        morning: 'Peanut Butter Banana Smoothie',
        lunch: 'fiber bar',
        dinner: 'Pepper Steak & Broccoli',
        image: "'https://i.imgur.com/wcqP6zl.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/a3gR1q0.jpg'"
    },  {
        day: 'Thursday',
        morning: 'Blueberry Banana Acai Bowl',
        lunch: 'fiber bar',
        dinner: 'Smoked Snapper & Veggie Mix',
        image: "'https://i.imgur.com/cXIqiL1.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/Ievznlr.jpg'"
    },  {
        day: 'Friday',
        morning: 'Egg Avacado Sandwhich',
        lunch: 'fiber bar',
        dinner: 'Steamed Fish & Asparagus',
        image: "'https://i.imgur.com/jlX5juV.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/LoEvbXj.jpg'"
    },  {
        day: 'Saturday',
        morning: 'Peanut Butter Banana Smoothie',
        lunch: 'fiber bar',
        dinner: 'Grilled Chicken & Veggie Mix',
        image: "'https://i.imgur.com/wcqP6zl.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/qx6tj4M.jpg'"
    },  {
        day: 'Sunday',
        morning: 'Over Night Oats & blueberries',
        lunch: 'fiber bar',
        dinner: 'Smoked Snapper & Veggie Mix',
        image: "'https://i.imgur.com/KBFKwi8.jpg', 'https://i.imgur.com/JIcjou4.jpg', 'https://i.imgur.com/Ievznlr.jpg'"
    }
]

db.Detox.deleteMany({}, (err, detox) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all detox')

        db.Detox.insertMany(detoxRegiment, (err, detox) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', detox.length, 'detox')
            }
        })
    }
})

db.WeightLoss.deleteMany({}, (err, weight) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all weightLoss')

        db.WeightLoss.insertMany(weight_loss_seed, (err, weight) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', weight.length, 'weightLoss')
            }
        })
    }
})