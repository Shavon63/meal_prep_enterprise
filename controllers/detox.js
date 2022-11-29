// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()



// rendering detox page
router.get('/',(req, res)=> {
    db.Detox.find({}, (err, detoxs)=> {
    res.render('detoxshow', {
        detoxs: detoxs,
        tabTitle: "Detox Meal Plan"
    })
})
})

// New Route (GET/Read): This route renders a form the user will use to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('newDetoxMeal.ejs', {
        tabTitle: "Detox Meal Creation"
    })
})



// Create Route (POST/Create): This route receives the POST request sent from the new route above, parses it into a location object, creates the location object as a document in the locations collection, and redirects the user back to the root/home page
router.post('/', (req, res) => {
    db.Detox.create(req.body, (err, detox) => {
        //redirects it to home page after created
        res.redirect('/detox/')
    })
})
router.post('/seed', (req, res) => {
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
    db.Detox.create(detoxRegiment, (err, detox) => {
        //redirects it to home page after created
        res.redirect('/detox/')
    })
})

router.get('/:id', (req, res) => {
    // find item specific to the URL
    db.Detox.findById(req.params.id, (err, detox) => {
    // show the showpage of that specific item
    res.render("showDetoxMeal", {
        detox: detox,
        tabTitle: "Detox Meal"
    })
    
})
}
)
// Delete Route allows us to delete and reroute us home. its being updated that the meal was deleted.
router.delete('/:id', (req, res) => {
 db.Detox.findByIdAndRemove(req.params.id, (err, detox) => {
        // redirect home onces meal is deleted)
        res.redirect('/')
    })
    // res.send(req.params.id)
})


router.get('/:id/edit', (req, res) => {
    db.Detox.findById(req.params.id, (err, detox) => {
        console.log(detox)
        res.render("editDetox", {
            detox: detox,
            tabTitle: "Edit Detox"
        })
    })
})

// this route is after edit button is pressed it can take us back to detox/.id showdetoxmeal
router.put('/:id', (req, res)=> {
    console.log('i am working')
    db.Detox.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, detox)=> {
        res.redirect("/detox/" + detox._id)
    })
})
module.exports = router