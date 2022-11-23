// dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()


// rendering mealplan page 

// New Route (GET/Read): This route renders a form the user will use to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('newDetoxItem.ejs', {
        tabTitle: "Detox ItemCreation"
    })
})

// Create Route (POST/Create): This route receives the POST request sent from the new route above, parses it into a location object, creates the location object as a document in the locations collection, and redirects the user back to the root/home page
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Detox.create(req.body, (err, detox) => {
        res.redirect('/detox/' + detox._id)
        // res.send(location)
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // find item specific to the URL
    db.Detox.findById(req.params.id, (err, detox) => {
    // show the showpage of that specific item
    res.render("showDetox", {
        detox: detox,
        tabTitle: "Item Is" + detox.day
    })
    
})
}
)

module.exports = router