const request = require('request')

const forecast = (lat, long, callback) => {
    url = `https://api.darksky.net/forecast/772f03f5ba7c5acb93e1997e37edc66a/${lat},${long}`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Cannot reach weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location, try again', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees, with a %${response.body.currently.precipProbability} chance of rain`)
        }
    })
}

module.exports = forecast