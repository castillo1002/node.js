const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')


geocode(process.argv[2], (error, data) => {
    if (!process.argv[2]) {
        return console.log('Please provide a location')
    }
    if (error) {
        return console.log('Error: ', error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error: ', error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

This is my change YEET!!
YEEEEEEEET