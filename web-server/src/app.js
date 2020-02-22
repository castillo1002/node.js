// Express only exposes a single function
const path = require('path')
const express = require('express')

const app = express()

// In order to use html files for sending using express, we have to indicate the path of the file where our html code resides.  We can use two handy methods provided by nodejs for finding the path:

console.log(__dirname)
console.log(__filename)

// __dirname will display the full path of the dir where our file lives
// __filename will display the full path of where the file itself lives

// There is a core module called path that we can use to manipulate paths of dirs and files.  We use the join method to provide the different pieces of the path, and join will join them together in a string.  In the 1st arg, we use the __dirname built in method, and in the 2nd arg, we can traverse the folder structure to provide the path to a file or folder in a different directory:

console.log(path.join(__dirname, '../public/index.html'))
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')



// Example domain: app.com
// Routes:
// app.com/help
// app.com/about

// app.get denotes what we should do, when someone makes a request to a specific url.  Takes 2 arguments: 1. Route 2. Callback Function  The callback function also has two important arguments, the first is info about the request that was made (req), and the second is the response (res) which allows us to customize what we are going to send to the requestor by using its methods:

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Arturo Castillo'
    })
})

// Method used to customize our server which in this case lets us serve up the static assets (html, images, videos, etc) in a specific directory.  With this we don't need to create separate routes for assets that live in the public folder:
app.use(express.static(publicDirectoryPath))

// When we send an object as a response, express will stringify our JSON object for us.  This can be an obj, or an array.

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
