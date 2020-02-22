const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config:
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// Setup static dir to serve
app.use(express.static(publicDirectoryPath))

// The res.render method allows us to render one of our view files and also specify what data our view should be able to access by using an object in the 2nd argument

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Arturo Castillo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is my help message',
        title: 'Help',
        name: 'Arturo Castillo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Arturo Castillo'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('The server is up on port 3000')
})