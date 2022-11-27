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
        res.redirect('/')
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
        res.render("editDetox", {
            detox: detox,
            tabTitle: "Edit Detox"
        })
    })
})
//this route is after edit button is pressed it can take us back to detox/.id showdetoxmeal
router.put('/:id', (req, res)=> {
    db.Detox.findByIdAndUpdate(req.body.id, (err, detox)=> {
        res.redirect("/detox/" + detox._id)
    })
})
module.exports = router