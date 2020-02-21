const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')


geocode(process.argv[2], (error, { longitude, latitude, location }) => {
    if (!process.argv[2]) {
        return console.log('Please provide a location')
    }
    if (error) {
        return console.log('Error: ', error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error: ', error)
        }
        console.log(location)
        console.log(forecastData)
    })
})