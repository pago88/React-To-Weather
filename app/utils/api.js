var axios = require('axios'); 
var apiKey = require('./key').apiKey;

var _baseURL = 'https://api.openweathermap.org/data/2.5/';



function getParameters (city) {
    return {
        q: city,
        APPID: apiKey
    }
}

function assembleParameters (parameters) {
    var parms = Object.keys(parameters)
        .map(function (key) {
            return key + '=' + encodeURIComponent(parameters[key])
        }).join('&') 
    
    return parms;
}

function getCurrentWeather (city) {
    var parameters = assembleParameters (getParameters(city));
    var URI = _baseURL + 'weather?' + parameters;

    return axios.get(URI)
        .then(function(response) {
            return response.data
        })
}

function getFiveDayForecast (city) {
    var parameters = assembleParameters (getParameters(city));
    var URI = _baseURL + 'forecast?' + parameters;

    return axios.get(URI)
        .then(function (response) {
            return response.data.list // list of 40 elements, each is weather data for every 3 hours
                .filter(function (weatherPoint, index) { 
                    return index % 8 == 0; // divide by 8 to return 5 total weather points, 24 hrs apart
                })
        })
}


module.exports = {
    fetchCurrentForecast: getCurrentWeather,

    fetchFiveDayForecast: getFiveDayForecast
}
