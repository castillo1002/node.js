// Express only exposes a single function
const path = require('path')
const express = require('express')

const app = express()

// In order to use html files for sending using express, we have to indicate the path of the file where our html code resides.  We can use two handy variables provided by nodejs for finding the path:

console.log(__dirname)
console.log(__filename)

// __dirname will display the full path of the dir where our file lives
// __filename will display the full path of where the file itself lives

// There is a core module called path that we can use to work with paths of dirs and files.  We use the join method to provide the different pieces of the path, and join will join them together in a string:

console.log(path.join(__dirname, '../public/index.html'))
const publicDirectoryPath = path.join(__dirname, '../public')

// Method used to customize our server which serves up the html in our static file:
app.use(express.static(publicDirectoryPath))

// Example domain: app.com
// Routes:
// app.com/help
// app.com/about

// app.get denotes what we should do, when someone makes a request to a specific url.  Takes 2 arguments: 1. Route 2. Callback Function  The callback function also has two important arguments, the first is info about the request that was made (req), and the second is the response (res) which allows us to customize what we are going to send to the requestor by using its methods:

// Note, we can send back html/js/css/videos/images/json:

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

// Route for app.com/help:
// When we send an object as a response, express will stringify our JSON object for us.  This can be an obj, or an array.

app.get('/help', (req, res) => {
    res.send({
        name: 'Arturo',
        age: 27
    })
})

app.get('/about', (req, res) => {
    res.send('<h2>About<h2>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Philadelphia'
    })
})


// To start server:  (Port 3000 is commonly used for development).  When it is running, your terminal will hang since the process is still listening.

app.listen(3000, () => {
    console.log('The server is up on port 3000')
})

// After the server has started, it will run on your local machine and will be accessible on localhost:3000

// If you try to access a route that is not in the application, you will get an error, which should be handled with something like a 404 page
