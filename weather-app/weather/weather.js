const request = require('request');

// API Key:  be10fdc5fcb1ee3c762b2f4c32a34c0b
// https://api.darksky.net/forecast/be10fdc5fcb1ee3c762b2f4c32a34c0b/12.9306048,77.54337389999999
//
// var key = "be10fdc5fcb1ee3c762b2f4c32a34c0b";
// var latitude = 12.9306048;
// var longitude = 77.54337389999999

var getWeather = (lat, lan, callback) => {
  request({
    url:`https://api.darksky.net/forecast/be10fdc5fcb1ee3c762b2f4c32a34c0b/${12.9306048},${77.54337389999999}`,
    json: true
  },(error, response, body) => {
    if (error){
      callback("Unable to connect to forecast.io servers");
    } else if (response.statusCode === 400) {
      callback(body.error);
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback(body);
    }
    // if (!error && response.statusCode === 200){
    //   console.log(body.currently.temperature);
    // } else {
    //   console.log('Unable to fetch weather');
    // }
    // else {
    //   console.log(body);
    // }
  }
  );
};


module.exports.getWeather = getWeather;
