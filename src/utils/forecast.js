const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6635084359d8d59a9935090806142086/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + Math.round(body.currently.precipProbability*100) + '% chance of rain.'
            )
        }
    })
}       

module.exports = forecast