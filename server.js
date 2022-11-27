const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override');
// access models
const db = require('./models')
// access controllers
const detoxCtrl = require('./controllers/detox')
const ketoCtrl = require('./controllers/keto')



// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
app.use(express.static('public'))
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs')
// method-override allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));
// body parser: used for POST/PUT/PATCH routes: this will take incoming strings from the body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// an example function that shows how middleware will be run every time a route is accessed
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//+-+-+-+-+-+-+-
//routes
//+-=-+-+-+-+-+-
//this route will be the home page route 
// app.get('/', (req, res)=> {
//     //db detox needs to be accessed to render on page
//     db.Detox.find({}, (err, detox)=> {
//     //call on database of weightLoss to render it on page
//     db.Keto.find({}, (err, keto)=> {
//         //this will render the file for weight_loss when url persist
//         res.render('home', {
//             detox: detox,
//             keto: keto,
//             tabTitle: "Meal Prep Enterprise"
//         }) 
//       })
//   })   
// })
app.get('/', (req, res)=> {
    res.render('home', {
                    tabTitle: "Meal Prep Enterprise"
    })
})

app.get('/keto', (req, res)=> {
    db.Keto.find({}, (err, keto)=> {
        res.render('ketoshow', {
            keto: keto,
            tabTitle: "keto meals" })
    })
})

app.get('/detox', (req, res)=> {
    db.Detox.find({}, (err, detoxs)=> {
        res.render('detoxshow', {
            detoxs: detoxs,
            tabTitle: "detox meals" })
    })
})

// //All routes affecting the detox model: This tells our app to look at the `controllers/detox.js` file to handle all routes that begin with `localhost:3000/mealplan`
app.use('/detox', detoxCtrl)
//all routes affection keto
app.use('/keto', ketoCtrl)

//LISTENER
app.listen(port, ()=>{
    console.log(`App is running on localhost:${port}`)
})