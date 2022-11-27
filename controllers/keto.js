// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()


// rendering mealplan page 
router.get('/',(req, res)=> {
    db.Keto.find({}, (err, keto)=> {
    res.render('ketoshow', {
        keto: keto,
        tabTitle: "Keto Meal Plan"
    })
})
})

// New Route (GET/Read): This route renders a form the user will use to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('newKetoMeal.ejs', {
        tabTitle: "Keto Meal Creation"
    })
})

// Create Route (POST/Create): This route receives the POST request sent from the new route above, parses it into a location object, creates the location object as a document in the locations collection, and redirects the user back to the root/home page
router.post('/', (req, res) => {
    db.Keto.create(req.body, (err, keto) => {
        res.redirect('/' + keto._id)
        // res.send(location)
    })
})

router.get('/:id', (req, res) => {
    // find item specific to the URL
    db.Keto.findById(req.params.id, (err, keto) => {
    // show the showpage of that specific item
    res.render("showketoMeal", {
        keto: keto,
        tabTitle: 'Keto Meal'
    })
    
})
}
)
// Delete Route allows us to delete and reroute us home. its being updated that the meal was deleted.
router.delete('/:id', (req, res) => {

    db.Keto.findByIdAndRemove(req.params.id, (err, keto) => {
        // redirect home onces meal is deleted)
        res.redirect('/')
    })
    // res.send(req.params.id)
})

router.get('/:id/edit', (req, res) => {
    db.Keto.findById(req.params.id, (err, keto) => {
        res.render("editKeto", {
            keto: keto,
            tabTitle: "Edit Keto"
        })
    })
})
//this route is after edit button is pressed it can take us back to detox/.id showdetoxmeal
router.put('/:id', (req, res)=> {
    db.Keto.find(req.body.id, (err, keto)=> {
        res.redirect('/keto/' + keto._id)
    })
})

// export these routes so that they are acessible in `server.js`
module.exports = router