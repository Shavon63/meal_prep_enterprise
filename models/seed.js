// give database variable
const db = require('./')

const detoxRegiment = [
    
        {
            name: 'Monday',
            breakfast:'Strawberry Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Curry Chickpeas & Wildrice w Salad',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/lxfqsjy.jpg',
            images: 'https://i.imgur.com/QtUWien.jpg',
            img: 'https://i.imgur.com/HgmXfq8.jpg'

        },
        {
            name: 'Tuesday',
            breakfast: 'Coconut Papaya Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed veggies & Wildrice Cocunut Sauce',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/9qeZ8dH.jpg',
            images:'https://i.imgur.com/FLEtWDL.jpg', 
            img: 'https://i.imgur.com/HgmXfq8.jpg'

        }, 
        {
            name: 'Wednesday',
            breakfast: 'Blackberry Apple Acai Bowl',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed Zucchini, Pumpkin, Tommatos, Onions, Bellpeppers',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/xao4CzF.jpg', 
            images: 'https://i.imgur.com/nxx8URk.jpg', 
            img: 'https://i.imgur.com/HgmXfq8.jpg'

        }, 
        {
            name: 'Thursday',
            breakfast: 'Blackberry Grape Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Curry Chickpeas & Wildrice w Salad',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/NHwqNM4.jpg', 
            images: 'https://i.imgur.com/QtUWien.jpg', 
            img: 'https://i.imgur.com/HgmXfq8.jpg'

        }, 
        {
            name: 'Friday',
            breakfast: 'Apple Bannana Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: "Lentil Veggie Soup",
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/0UCkBQQ.jpg', 
            images: 'https://i.imgur.com/a6gHr8E.jpg', 
            img:'https://i.imgur.com/HgmXfq8.jpg'

            
        }, 
        {
            name: 'Saturday',
            breakfast: 'Coconut Papaya Smoothie',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed Zucchini, Pumpkin, Tommatos, Onions, Bellpeppers',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/9qeZ8dH.jpg', 
            images: 'https://i.imgur.com/nxx8URk.jpg', 
            img: 'https://i.imgur.com/HgmXfq8.jpg'

        },
        {
            name: 'Sunday',
            breakfast: 'Blackberry Apple Acai Bowl',
            morningTea: 'Lymphatic Endocrine Blend',
            lunch: '4 oz Pstachios',
            dinner: 'Steamed veggies & Wildrice Cocunut Sauce',
            afternoonTea: 'Lymphatic Endocrine Blend',
            nightimePills: 'Mucus Buster Blend ' ,
            image: 'https://i.imgur.com/xao4CzF.jpg', 
            images: 'https://i.imgur.com/FLEtWDL.jpg', 
            img: 'https://i.imgur.com/HgmXfq8.jpg'

    }
        
    
]

const keto_seed = [
    {
        day: 'Monday',
        breakfast: 'Egg Avacado Sandwhich',
        lunch: 'fiber bar',
        dinner: 'Bake Chicken & Brussels',
        image: 'https://i.imgur.com/jlX5juV.jpg', 
        images: 'https://i.imgur.com/6XRA0U2.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Tuesday',
        breakfast: 'Over Night Oats & blueberries',
        lunch: 'fiber bar',
        dinner: 'Steamed Fish & Asparagus',
        image: 'https://i.imgur.com/KBFKwi8.jpg',
        images:'https://i.imgur.com/LoEvbXj.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Wednesday',
        breakfast: 'Peanut Butter Banana Smoothie',
        lunch: 'fiber bar',
        dinner: 'Pepper Steak & Broccoli',
        image: 'https://i.imgur.com/wcqP6zl.jpg', 
        images: 'https://i.imgur.com/a3gR1q0.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Thursday',
        breakfast: 'Blueberry Banana Acai Bowl',
        lunch: 'fiber bar',
        dinner: 'Smoked Snapper & Veggie Mix',
        image: 'https://i.imgur.com/cXIqiL1.jpg', 
        images: 'https://i.imgur.com/Ievznlr.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Friday',
        breakfast: 'Egg Avacado Sandwhich',
        lunch: 'fiber bar',
        dinner: 'Steamed Fish & Asparagus',
        image: 'https://i.imgur.com/jlX5juV.jpg', 
        images: 'https://i.imgur.com/LoEvbXj.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Saturday',
        breakfast: 'Peanut Butter Banana Smoothie',
        lunch: 'fiber bar',
        dinner: 'Grilled Chicken & Veggie Mix',
        image: 'https://i.imgur.com/wcqP6zl.jpg', 
        images: 'https://i.imgur.com/qx6tj4M.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg'
    },  {
        day: 'Sunday',
        breakfast: 'Over Night Oats & blueberries',
        lunch: 'fiber bar',
        dinner: 'Smoked Snapper & Veggie Mix',
        image: 'https://i.imgur.com/KBFKwi8.jpg', 
        images: 'https://i.imgur.com/Ievznlr.jpg',
        img: 'https://i.imgur.com/JIcjou4.jpg' 
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

db.Keto.deleteMany({}, (err, keto) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all weightLoss')

        db.Keto.insertMany(keto_seed, (err, keto) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', keto.length, 'ketodiet')
            }
        })
    }
})