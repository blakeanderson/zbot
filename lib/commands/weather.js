(function() {
  var $, http, request;
  http = require('http');
  $ = require('jquery');
  request = require('request');
  exports.execute = function(callback) {
    return request({
      uri: 'http://api.wunderground.com/auto/wui/geo/ForecastXML/index.xml?query=Denver,CO'
    }, function(error, response, body) {
      var weatherReport;
      if (error && response.statusCode !== 200) {
        return "error connecting to the weather underground api";
      }
      weatherReport = "";
      $(body).find('txt_forecast').each(function() {
        return $(this).find('forecastday').each(function() {
          weatherReport += $(this).find('title').text();
          return weatherReport += $(this).find('fcttext').text();
        });
      });
      console.log("WEATHER: " + weatherReport);
      return callback("", weatherReport);
    });
  };
}).call(this);
